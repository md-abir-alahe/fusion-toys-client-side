import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card/Card';
import { AuthContext } from '../../../provider/AuthProvider';

const ShopByCategory = () => {

    const {user}= useContext(AuthContext);


    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async (subCategory) => {
        try{
            const res = await fetch(`https://fusion-toys-server.vercel.app/toys/${subCategory}`)
            const data = await res.json();
            setToys(data);
            setLoading(false);
        }
        catch (error){
            console.error('Error fetching data:', error);
        }
    }
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await fetch(`https://fusion-toys-server.vercel.app/toys/Building%20Blocks`)
                const data = await res.json();
                setToys(data);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    },[]);
    
    // by default 
    // fetchData('Building Blocks')
    // by select
    const selected = (index) => {
        if(index==0){
            setLoading(true);
            fetchData('Building Blocks')
        }
        if (index == 1) {
            setLoading(true);
            fetchData('Magnetic Toys')
        }
        if (index == 2) {
            setLoading(true);
            fetchData('Model Building')
        }
    }

    // console.log(toys);

    // html
    const cards = <>
        <div className='flex flex-wrap gap-8 justify-center items-center '>
            {
                toys.map(toy => <Card
                    key={toy._id}
                    toy={toy}
                    user={user}
                ></Card>)
            }
       </div>
    </>

    return (
        <div className='mt-14'>
            <div>
                <h2 className='text-center text-6xl font-boogaloo font-semibold text-back'>Shop by category</h2>
            </div>
            <div>
                <Tabs className={'py-7'} defaultIndex={0} onSelect={(index) => {
                    return selected(index);
                }}>
                    <TabList>
                        <Tab>Building Blocks</Tab>
                        <Tab>Magnetic Toys</Tab>
                        <Tab>Model Building</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            loading ? <button className="btn text-primary loading">loading</button> : cards
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ? <button className="btn text-primary loading">loading</button> : cards
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ? <button className="btn text-primary loading">loading</button> : cards
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;