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
            const url = "http://localhost:8000/stories";
            const res = await fetch(url, { cache: 'no-store' });
            const result = await res.json();
            setStory(result);
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    const fetchStoryInfo = async (storyID) => {
        try {
            setLoading(true)
            const story_choice_url = 'http://localhost:8000/story_choice_options${storyID}'

            const res = await fetch(url, { cache: 'no-store' });
            const result = await res.json();
            setStoryOptions(result);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const selectChoice = () => {
        return (
            <button>{storyOptions}</button>
            <button></button>
        )
    }

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
                <p>{story[0].initial_setting.long_text}</p>
                {/* <button onClick = nextPrompt></button> */}
            </div>
        )
    }

  
};

export default StoryPage
