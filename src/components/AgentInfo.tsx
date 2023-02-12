import { convertDOBFormat } from "../helpers/convertDOB";
import { Agent } from "../types/agent";

interface AgentInfoProps {
  agent: Agent;
}

const AgentInfo = ({ agent }: AgentInfoProps) => {
  return (
    <div className="flex flex-col items-center w-full border">
      <h1 className="w-full text-2xl font-bold bg-white text-black text-center h-[48px] border is-center">agent information</h1>
      <img src={agent.largePhoto} className="w-64 h-64 object-cover my-5 grayscale" alt="Agent" />
      <h1 className="text-2xl font-bold text-white">#{agent.codename}</h1>
      <h2 className="text-xl font-bold text-white lowercase">
        <b>{agent.lastName}</b>, {agent.firstName}
      </h2>
      <div className="p-8 w-full rounded-lg shadow-lg text-white mt-5 font-anonymous uppercase">
        <>
          <b>Location:</b>
          <br />
          {agent.city}, {agent.state}, <b>{agent.country}</b>
          <br />
          <b>Timezone:</b>
          <br />
          {agent.timezone.description}
          <br />
          <b>Features:</b> <br />
          Eye Color: {agent.eyeColor}
          <br />
          DOB: {convertDOBFormat(agent.dob)}
          <br />
        </>
      </div>
    </div>
  );
};

export default AgentInfo;
