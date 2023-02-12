import React, { useState, useEffect, useCallback } from "react";
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
    <div className="container mx-auto min-h-screen box-border flex items-center justify-center">
      <div
        className="flex h-[90vh] w-full backdrop-blur-md flex items-center justify-center rounded"
        style={{
          border: `1px solid rgba(255, 255, 255, 0.55)`,
        }}
      >
        {isLoading ? (
          <h1 className="text-white text-5xl">Loading...</h1>
        ) : agent ? (
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-[white]">Agent Information</h1>
            <div className="w-64 bg-white p-5 rounded-lg shadow-lg">{JSON.stringify(agent)}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleNextAsset}>
              Next Asset
            </button>
          </div>
        ) : (
          <div>No data to display</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
