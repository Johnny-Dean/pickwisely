// story prompt page
"use client";

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const StoryPage = () => {
    const url = "http://localhost:8000/stories"
    const [story, setStory] = useState()
    const [isLoading, setLoading] = useState(true)
    const [storyOptions, setStoryOptions] = useState()


    //  Initial data fetch
    useEffect(() => {
        const fetchData = async () => {
          try {
            const storyUrl = "http://localhost:8000/stories";
            const storyRes = await fetch(url, { cache: 'no-store' });
            const storyResult = await storyRes.json();
            setStory(storyResult);
            
            if (storyResult && storyResult.length > 0) {
                const optionsUrl = `http://localhost:8000/story_choice_options/${storyResult[0].id}`;
                const optionsRes = await fetch(optionsUrl, { cache: 'no-store' });
                const optionsResult = await optionsRes.json();
                setStoryOptions(optionsResult);
                console.log(optionsResult);
            }
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    // const selectChoice = () => {
    //     return (
    //     )
    // }

    const nextPrompt = () => {
        try {
            // onclick 1. save button input
            // 2. feed the submission data into ai to generate next 
            // 3. repeat 
        } catch (err) {
            console.log(err)
        }
    }
    
    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className='font-body text-green-500 flex items-center justify-center min-h-screen'>{story[0].initial_setting.long_text}</p>
                <p>{storyOptions[0].initial_setting.long_text}</p>
                {/* <button onClick = nextPrompt></button> */}
            </div>
        )
    }

  
};

export default StoryPage
