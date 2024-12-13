import { Skeleton, Menu } from '@mantine/core';
import { useQuery } from '@tanstack/react-query'
import Addcar from './Addcar';
import Updatestatusvahicle from './Updatestatusvahicle';

const Dashboard = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['vehicles'],
        queryFn: () =>
          fetch(`http://localhost:3000/vehicles/all`).then((res) =>
            res.json(),
          ),
          enabled: true,
      })

      
    return (
        <div className="lg:w-[800px] px-3 max-h-fit bg-[#202020] rounded-lg text-[#b0b0b0] text-start text-sm font-medium font-['Montserrat']">
            <div className="grid grid-flow-col justify-between py-2">
                <div className="px-2 text-white text-xl self-center">
                    Vehicles List
                </div>

                
                <div className="px-2 flex gap-10">
               
                    <Addcar/>  

                    <div className="self-center flex items-center gap-2">
                        <div className="text-white text-base font-normal font-['Montserrat']">
                            Entries /Page
                        </div>
                        <div className="px-7 py-1 text-base text-white bg-[#111111] rounded" >
                            10
                        </div>
                    </div>
                </div>
                
            </div>

            <table className="border-separate border-spacing-y-2">
                <thead>
                    <tr className="text-white text-base font-semibold font-['Montserrat']">
                        <th className="w-36 py-3 pl-3 text-start">Make</th>
                        <th className="w-28 py-3 text-start">Model</th>
                        <th className="w-20 py-3 text-start">Year</th>
                        <th className="w-28 py-3 text-start">Horse Power</th>
                        <th className="w-28 py-3 text-start">Transmission</th>
                        <th className="w-24 py-3 text-start">Status</th>
                        <th className="w-28 py-3 text-start">Manage</th>
                    </tr>
                </thead>

                <tbody>
                    {isPending&&
                        <tr>
                            <td colSpan='8'>
                                <Skeleton visible={!isPending}> 
                                    <Skeleton height={20} width={770} mt={15} radius="xl"/> 
                                    <Skeleton height={20} width={770} mt={15} radius="xl"/> 
                                    <Skeleton height={20} width={770} mt={15} radius="xl"/> 
                                    <Skeleton height={20} width={770} mt={15} radius="xl"/> 
                                    <Skeleton height={20} width={770} mt={15} radius="xl"/> 
                                    <Skeleton height={20} width={770} mt={15} radius="xl"/> 
                                </Skeleton>
                            </td>
                        </tr>
                    }

                    {error &&  
                        <tr>
                            <td colSpan='8' className='text-center text-xl text-red-400'>
                            An error has occurred: {error.message}
                            </td>
                        </tr>
                    }

                {data && data.map((vehicle) => (
                    <tr key={vehicle._id} className="bg-[#111111]  overflow-hidden">
                        <td className="py-2 pl-3">{vehicle.make }</td>
                        <td>{vehicle.model}</td>
                        <td>{vehicle.year}</td>
                        <td className="text-light-blue-400">{vehicle.horsePower}</td>
                        <td>{vehicle.transmission}</td>
                        <td>{vehicle.status}</td>
                        <td><Updatestatusvahicle vehicle={vehicle}/></td>
                    </tr>
                ))}
                 </tbody>
            </table>
        </div>
    );
}
export default Dashboard;