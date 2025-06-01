import { useRouter } from "next/router";

function ProjectDetails() {
  const {query,isReady} = useRouter();
  
  if(!isReady){
    return <div>Loading...</div>
  }

  const params = Array.isArray(query.slug) ? query.slug : [];

  return (
    <>
      <div>ProjectDetails:</div>
      <ul>
        <li>id: {params[0]}</li>
        <li>tab: {params[1]}</li>
      </ul>
    </>
  );
}

export default ProjectDetails;
