import { useEffect, useState } from "react";

const TopDestination = () => {
    const [datas, setDatas] = useState([]);
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                setRecords(data)
            });
    })
    const handleLaunchStatus =(e)=>{
        e.preventDefault();
        setRecords(datas.filter(f=>f.launch_success.toLowerCase().includes(e.target.value)))
    }
    console.log(records)
    return (
        <div>
           <select className="form-select" aria-label="Default select example" onChange={handleLaunchStatus}>
                <option selected>By Launch Status</option>
                <option value="false">Failed</option>
                <option value="true">Success</option>
            </select>
          
            <div className="grid grid-cols-4">
                {
                    records.map(d => {
                        return <div>
                            <h4>{d.mission_name}</h4>
                        </div>

                    })
                }
            </div>
        </div>
    );
};

export default TopDestination;