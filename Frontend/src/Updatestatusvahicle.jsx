import { Select, TextInput, Center, Modal, LoadingOverlay } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import { useDisclosure } from '@mantine/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from '@mantine/form';


const Updatestatusvahicle = ({vehicle}) =>{

    const [opened, { open, close }] = useDisclosure(false);

    const queryClient = useQueryClient();


    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {...vehicle},
        validate: {

           },
        });
        
        const {mutate, isPending, error } = useMutation({
            mutationFn: (newPost) => 
              fetch(`http://localhost:3000/vehicles/updatestatus/${vehicle._id}`, {
                method: "PATCH",
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
        <span onClick={open} className="hover:bg-[#008f97] transition-all ease-in-out  bg-[#00adb5] text-white py-1 px-3 rounded cursor-pointer">Update Status</span>
        
            <Modal opened={opened} onClose={close} title={'Update the Status of '+ vehicle.make} centered>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    
                    <LoadingOverlay visible={isPending} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }}>
                    </LoadingOverlay>
                    {error&&<div className='text-center text-red-400'>{error.message}</div>}
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
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                                Update Status
                            </div>
                        </button> 
                    </Center>
                    
                </form>
            </Modal>
            
        </>

    );
}

export default Updatestatusvahicle;