// import { useRouter } from "next/router";
import {User} from '@/types/user.type'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data:User[] = await res.json()
  return {
    // paths: data.map((user:User)=>({
    //   params: { id: user.id.toString() }
    // })),
    paths: data.map(user=>(
      {
        params:{
          id:user.id.toString()
        }
      }
    )),
    fallback: false
  }
}

export const getStaticProps = async ({params}:{params:{id:string}}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const data:User = await res.json()
  return {
    props: { user: data },
  }
}


function ProjectDetails({user}:{user:User}) {
  // const {query,isReady} = useRouter();
  
  // if(!isReady){
  //   return <div>Loading...</div>
  // }

  // const params = Array.isArray(query.slug) ? query.slug : [];

  
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="">{user.email}</p>
      <p className="">{user.phone}</p>
      <p className="">{user.website}</p>
    </div>
  );
}

export default ProjectDetails;
