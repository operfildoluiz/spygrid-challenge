import { useState, useEffect, useCallback } from "react";
import { Agent } from "../types/agent";

const useAgent = (): [() => Promise<Agent | null>, boolean] => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (): Promise<Agent | null> => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api`);
      const data = await response.json();
      const agent = {
        id: data.results[0].id.value,
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
      };
      setIsLoading(false);
      return agent;
    } catch (error) {
      setIsLoading(false);
      return null;
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [fetchData, isLoading];
};

export default useAgent;
