
type props = []

export default function Header(props :{title:string})
{
    return (<div className="bg-green-400">Header: {props.title}</div>)
}