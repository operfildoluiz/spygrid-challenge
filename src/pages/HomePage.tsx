import React, { useState, useEffect, useCallback } from 'react';
import useAgent from '../hooks/useAgent';
import { Agent } from '../types/agent';

const HomePage: React.FC = () => {
    const [agent, setAgent] = useState<Agent | null>(null);
    const [fetchAgentData, isLoading] = useAgent();


    const handleNextAssetClick = useCallback(async () => {
        const fetchedAgent = await fetchAgentData();
        setAgent(fetchedAgent);
    }, [fetchAgentData]);

    useEffect(() => {
        handleNextAssetClick();
    }, [handleNextAssetClick]);

    return (
        <div className="container mx-auto p-10">
            {agent && (
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Agent Information</h1>
                    <div className="w-64 bg-white p-5 rounded-lg shadow-lg">
                        {JSON.stringify(agent)}
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                        onClick={handleNextAssetClick}
                    >
                        Next Asset
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomePage;