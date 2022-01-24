import './app-info.css';

const AppInfo = (props) => {
    const {numEmpl, data} = props;

    let onlyIncrease = data.filter(item => item.increase).length;
    

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании: </h1>
            <h2>Общее число сотрудников: {numEmpl} </h2>
            <h2>Премию получат: {onlyIncrease} </h2>
        </div>
    )
};

export default AppInfo;