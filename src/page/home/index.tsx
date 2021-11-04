import {useState} from 'react'



interface ListPops {
    name: string,
    key: string | number
}


function Home(){
    const list: ListPops[] = [
        {
            name: '1',
            key: Math.random().toString(36).substring(7).split('').join('.')
        },
        {
            name: '2',
            key: Math.random().toString(36).substring(7).split('').join('.')
        },
        {
            name: '3',
            key: Math.random().toString(36).substring(7).split('').join('.')
        },
        {
            name: '4',
            key: Math.random().toString(36).substring(7).split('').join('.')
        },
        {
            name: '5',
            key: Math.random().toString(36).substring(7).split('').join('.')
        }
    ]
    const [demoList,setDemoList] = useState<ListPops[]>(list)
    const handleDelete = (index : number) => {
        let newList = JSON.parse(JSON.stringify(demoList))
        newList.splice(index,1)
        setDemoList(newList)
    }
    return (
        <div>
            {
                demoList.map((item,index) => (
                    <div key={item.key}>
                        <span>{item.name}</span>
                        <button onClick={ () => {handleDelete(index)} }>删除</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Home