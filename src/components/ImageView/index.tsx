import React,{useState,useEffect} from 'react'

interface ImageViewProps {
    src: string;
    errMessage?:string;
    emptyMessage?: string;
    loading?: React.ReactNode
}

enum StateProps {
    SUCCESS = 'success',
    FAILED = 'failed',
    LOADING = 'loading'
}
const ImageView: React.FC<ImageViewProps> = props => {
    const { src,errMessage,emptyMessage,loading } = props
    const [status,setStatus] = useState<'success'|'failed'|'loading'>('loading')

    useEffect(()=>{
        
    },[src])
    return (
        <img/>
    )
}

export default ImageView
