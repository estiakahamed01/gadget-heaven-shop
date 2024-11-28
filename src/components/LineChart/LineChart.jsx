import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const gadgetShoppingData = [
        { customerId: 1, productName: 'Smartphone', model: 'iPhone 14', priceSpent: 200 },
        { customerId: 2, productName: 'Laptop', model: 'MacBook Air M2', priceSpent: 350 },
        { customerId: 3, productName: 'Tablet', model: 'iPad Pro 12.9', priceSpent: 120 },
        { customerId: 4, productName: 'Smartwatch', model: 'Apple Watch  8', priceSpent: 450 },
        { customerId: 5, productName: 'Headphones', model: 'Sony WH-10XM5', priceSpent: 300 },
        { customerId: 6, productName: 'Smartphone', model: 'Samsung Galaxy S23', priceSpent: 220 },
        { customerId: 7, productName: 'Laptop', model: 'Dell XPS 13', priceSpent: 500 },
        { customerId: 8, productName: 'Smartwatch', model: 'Fitbit Versa 4', priceSpent: 280 },
        { customerId: 9, productName: 'Headphones', model: 'Bose Quiet 45', priceSpent: 150 },
        { customerId: 10, productName: 'Tablet', model: 'Samsung Galaxy S8', priceSpent: 400 }
      ];
      
    return (
        <div>
            {/* <LChart width={500} height={400} data={gadgetShoppingData}>
                <Line dataKey="priceSpent" stroke='#9538E2'></Line>
            </LChart> */}
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart width={200} height={100} data={gadgetShoppingData}>
                    <XAxis dataKey="model"></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="priceSpent" fill='#9538E2'></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;