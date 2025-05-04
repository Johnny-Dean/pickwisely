"use client";

import React from 'react'
import { useState, useEffect } from "react";

interface Story {
  story_id: number;
  title: string;
  body: string;
  initial_setting: {
    long_text: string;
  };
}

interface StoryLog {
  story_log_id: number;
  story_id: number;
  prompt_asked: string;
}

interface StoryOption {
  choice_option_id: number;
  story_log_id: number;
  long_text: string;
  short_text: string;
  sanity_weight: number;
}

const StoryPage = () => {
    const [story, setStory] = useState<Story[]>()
    const [storyLog, setStoryLog] = useState<StoryLog>()
    const [storyOptions, setStoryOptions] = useState<StoryOption[]>()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          try {
            // 1. Fetch story
            const storyRes = await fetch("http://localhost:8000/stories", { 
              cache: 'no-store' 
            });
            const storyResult = await storyRes.json();
            console.log('Story data:', storyResult);
            setStory(storyResult);
            
            if (storyResult && storyResult.length > 0) {
                // 2. Get story log using story_id
                const logUrl = `http://localhost:8000/stories/${storyResult[0].story_id}/logs`;
                console.log('Fetching story log from:', logUrl);
                const logRes = await fetch(logUrl, { cache: 'no-store' });
                const logResult = await logRes.json();
                setStoryLog(logResult);

                // 3. Get options using story_log_id
                if (logResult && logResult.length > 0) {
                    const options = logResult[0].story_choice_options;
                    const optionsArray = Object.values(options);
                    setStoryOptions(optionsArray);
                    console.log('Options data:', optionsArray);
                }
            }
          } catch (err) {
            console.error('Error fetching data:', err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);

    const handleChoice = async (choiceId: number) => {
        try {
            // TODO: Implement choice handling
            // 1. Update the story_choice_options was_picked
            // 2. Get the next story_log based on the choice
            // 3. Update the UI with new options
            console.log('Selected choice:', choiceId);
        } catch (err) {
            console.error('Error handling choice:', err);
        }
    };
    
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="font-body text-green-500">Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="max-w-2xl text-center">
                <p className="font-body text-green-500 mb-8 text-xl">
                    {story?.[0]?.initial_setting?.long_text}
                </p>
                
                {storyLog && (
                    <p className="font-body text-green-500 mb-8">
                        {storyLog.prompt_asked}
                    </p>
                )}
                
                <div className="space-y-4">
                    {storyOptions?.map((option) => (
                        <button
                            key={option.choice_option_id}
                            onClick={() => handleChoice(option.choice_option_id)}
                            className="font-body text-green-500 px-10 py-3 w-72 border border-green-500 hover:bg-green-500 hover:text-black transition-colors"
                        >
                            {option.long_text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryPage
