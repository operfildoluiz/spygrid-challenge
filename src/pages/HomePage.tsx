import React, { useState, useEffect, useCallback } from "react";
import AgentInfo from "../components/AgentInfo";
import useAgent from "../hooks/useAgent";
import { Agent } from "../types/agent";

const HomePage: React.FC = () => {
  const [agent, setAgent] = useState<Agent | null>(null);
  const [fetchAgentData, isLoading] = useAgent();

  const handleNextAsset = useCallback(async () => {
    const fetchedAgent = await fetchAgentData();
    setAgent(fetchedAgent);
  }, [fetchAgentData]);

  useEffect(() => {
    handleNextAsset();
  }, [handleNextAsset]);

  return (
    <div className="container mx-auto min-h-screen box-border flex items-center justify-center font-major">
      <div
        className="grid h-[90vh] w-full backdrop-blur-md grid-cols-6 gap-2"
        style={{
          border: `1px solid rgba(255, 255, 255, 0.55)`,
        }}
      >
        {isLoading ? (
          <div className="col-span-6 is-center">
            <h1 className="text-white text-5xl">Loading...</h1>
          </div>
        ) : agent ? (
          <>
            <div className="col-span-2 flex flex-col h-full w-full">
              <AgentInfo agent={agent} />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-full" onClick={handleNextAsset}>
                Next Asset
              </button>
            </div>
            <div className="col-span-4"></div>
          </>
        ) : (
          <div>No data to display</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
