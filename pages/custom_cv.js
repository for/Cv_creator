import {useRouter} from 'next/router'

const CustomCv = (props)=>
{
    const router = useRouter()

return(
<div className={props.Container_CV}>
    <div className={props.header}>
        This block will be contain logo and a lot
         of options with you will be able print or send directly your CV to others
    </div>
    <div className={props.block_Menu}>
        There will be drag and drop elements to build CV
    </div>

    <div className={props.content}>
        This square will be contain entire content which we want to get , as an exapmple
        ther will be option which will block all unwanted actions for exaple drag elements
        over the content.
    </div>
    <input type="button" value="go next" onClick={()=> router.push('/personaldata')}/>
</div>
)
 

}
export default CustomCv;
