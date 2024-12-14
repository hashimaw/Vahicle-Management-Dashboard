import { Select, TextInput, Center, Modal, LoadingOverlay } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import { useDisclosure } from '@mantine/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from '@mantine/form';


const Addcar = () =>{

    const [opened, { open, close }] = useDisclosure(false);

    const queryClient = useQueryClient();


    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { make: '', model: '', year: '',  transmission:'', status:''},
        validate: {
            make: (value) => (value.length == 0 ? 'Please write the make of the vehicle' : null),
            model: (value) => (value <= 0 ? "Please write the model" : null),
            year: (value) => (value.length == 0 ? 'Please write the year' : null),
            transmission: (value) => (value.length == 0 ?  'Please select the transmission': null),
           },
        });

        const {mutate, isPending, error } = useMutation({
            mutationFn: (newPost) => 
              fetch(`https://vahicle-management-dashboard.onrender.com/vehicles/add`, {
                method: "POST",
                body: JSON.stringify(newPost),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              }).then((res) => { if (!res.ok) { return res.json().then((error) => { throw new Error(error.message || "Something went wrong"); }); } return res.json(); }),
              onError:()=>{open()},
              onSuccess:() => {
                queryClient.invalidateQueries({queryKey: ["vehicles"]});
                form.reset();
                close();
              }
          })

          const handleSubmit = (values) => { mutate({ ...values }); };

    return (
        <>
            <button onClick={open} >
                <div className="px-4 py-2 hover:bg-[#008f97] transition-all ease-in-out  bg-[#00adb5] rounded text-center self-center flex gap-2 items-center text-white text-lg" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-white size-5">
                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                    </svg>
                    Add Vehicle
                </div>
            </button>
            
            <Modal opened={opened} onClose={close} title="Add Vahicle" centered>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    
                    <LoadingOverlay visible={isPending} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }}>
                    </LoadingOverlay>
                    {error&&<div className='text-center text-red-400'>{error.message}</div>}
                    <TextInput mb={7}
                        label="Make of the Vehicle"
                        placeholder="Toyota"
                        key={form.key('make')}
                        {...form.getInputProps('make')}
                    /> 
                    <TextInput mb={7}
                        label="Model of the Vehicle"
                        placeholder="corolla"
                        key={form.key('model')}
                        {...form.getInputProps('model')}
                    /> 
                    <TextInput mb={15}
                        label='Manufacture year' 
                        component={IMaskInput} 
                        mask="0000" 
                        placeholder="2003" 
                        key={form.key('year')}
                        {...form.getInputProps('year')}
                    />
                     <Select mb={7}
                        label="Transmission Type"
                        placeholder='automatic'
                        data={['automatic','manual','CVT']}
                        key={form.key('transmission')}
                        {...form.getInputProps('transmission')}
                    />
                    <Select mb={7}
                        label="Status"
                        placeholder='available'
                        data={['available','sold','rented']}
                        key={form.key('status')}
                        {...form.getInputProps('status')}
                    />
                    <Center>
                        <button className="w-64 self-center">
                                <div className="px-4 py-2 hover:bg-[#008f97] transition-all ease-in-out  bg-[#00adb5] rounded text-center items-center self-center flex place-content-center gap-2 text-white text-lg" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-white size-5">
                                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                    </svg>
                                    Add Vahicle
                                </div>
                        </button> 
                    </Center>
                    
                </form>
            </Modal>
            
        </>

    );
}

export default Addcar;