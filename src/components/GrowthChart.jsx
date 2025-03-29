import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Sample data for different time periods
const monthData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Aug', value: 4000 },
  { name: 'Sep', value: 2300 },
  { name: 'Oct', value: 2500 },
  { name: 'Nov', value: 3300 },
  { name: 'Dec', value: 3700 },
];

const yearData = [
  { name: '2023 Q1', value: 12000 },
  { name: '2023 Q2', value: 7060 },
  { name: '2023 Q3', value: 9800 },
  { name: '2023 Q4', value: 9500 },
];

const twoYearData = [
  { name: '2022 Q1', value: 8000 },
  { name: '2022 Q2', value: 6000 },
  { name: '2022 Q3', value: 7500 },
  { name: '2022 Q4', value: 8200 },
  { name: '2023 Q1', value: 12000 },
  { name: '2023 Q2', value: 7060 },
  { name: '2023 Q3', value: 9800 },
  { name: '2023 Q4', value: 9500 },
];

const threeYearData = [
  { name: '2021 Q1', value: 5000 },
  { name: '2021 Q2', value: 5500 },
  { name: '2021 Q3', value: 6000 },
  { name: '2021 Q4', value: 6500 },
  { name: '2022 Q1', value: 8000 },
  { name: '2022 Q2', value: 6000 },
  { name: '2022 Q3', value: 7500 },
  { name: '2022 Q4', value: 8200 },
  { name: '2023 Q1', value: 12000 },
  { name: '2023 Q2', value: 7060 },
  { name: '2023 Q3', value: 9800 },
  { name: '2023 Q4', value: 9500 },
];


const Chart = ({ period, onPeriodChange }) => {
  const getChartData = () => {
    switch (period) {
      case 'month':
        return monthData;
      case 'year':
        return yearData;
      case '2year':
        return twoYearData;
      case '3year':
        return threeYearData;
      default:
        return monthData;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%" minHeight={200}>
          <LineChart
            data={getChartData()}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#374151',
                color: '#F9FAFB'
              }}
              itemStyle={{ color: '#F9FAFB' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#14B8A6"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Growth"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex space-x-2 mt-4">
        <button 
          className={`px-4 py-1 rounded-md ${period === 'month' ? 'bg-teal-500 text-white' : 'bg-white text-gray-700 border'}`}
          onClick={() => onPeriodChange('month')}
        >
          Month
        </button>
        <button 
          className={`px-4 py-1 rounded-md ${period === 'year' ? 'bg-teal-500 text-white' : 'bg-white text-gray-700 border'}`}
          onClick={() => onPeriodChange('year')}
        >
          Year
        </button>
        <button 
          className={`px-4 py-1 rounded-md ${period === '2year' ? 'bg-teal-500 text-white' : 'bg-white text-gray-700 border'}`}
          onClick={() => onPeriodChange('2year')}
        >
          2 Year
        </button>
        <button 
          className={`px-4 py-1 rounded-md ${period === '3year' ? 'bg-teal-500 text-white' : 'bg-white text-gray-700 border'}`}
          onClick={() => onPeriodChange('3year')}
        >
          3 Year
        </button>
      </div>
    </div>
  );
};

export default Chart;