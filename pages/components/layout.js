import {useRouter} from 'next/router'

const Layout = (props)=>

{
    const router = useRouter()
  
    return(
    <div>
        <h1 className={props.h1}>Create your awesome CV</h1>
        <input className={props.input} type="submit" value="Create standart CV" onClick={()=> router.push('/custom_cv')}></input>
        <input className={props.input} type="submit" value="Create custom cv"></input>
        
        </div>
    );
}

export default Layout;