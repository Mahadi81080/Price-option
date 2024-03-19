
import PropTypes from 'prop-types';
import { LineChart as LChart, Line,XAxis,YAxis} from 'recharts';
const LineChart = props => {
    const studentMarks = [
        { id: 1, name: "John", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Alice", math: 78, physics: 85, chemistry: 82 },
        { id: 3, name: "Bob", math: 92, physics: 88, chemistry: 95 },
        { id: 4, name: "Emily", math: 65, physics: 72, chemistry: 68 },
        { id: 5, name: "David", math: 70, physics: 68, chemistry: 75 },
        { id: 6, name: "Sophia", math: 88, physics: 92, chemistry: 85 },
        { id: 7, name: "Emma", math: 75, physics: 80, chemistry: 78 },
        { id: 8, name: "James", math: 82, physics: 75, chemistry: 80 },
        { id: 9, name: "Olivia", math: 90, physics: 95, chemistry: 92 },
        { id: 10, name: "Michael", math: 79, physics: 82, chemistry: 88 }
    ];
    
    
    return (
        <div className='my-5'>
            <LChart width={900} height={400} data={studentMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'physics'}></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>
                <Line dataKey='chemistry' stroke='blue'></Line>
            </LChart>
        </div>
    );
};

LineChart.propTypes = {
    
};

export default LineChart;