document.addEventListener('DOMContentLoaded', function() {
    const data = {
        "timelines": {
            "timeline1": [
                {
                    "time": "yesterday",
                    "event": "event1",
                    "context": "context1",
                    "actor": "actor1"
                },
                {
                    "time": "now",
                    "event": "event2",
                    "context": "context2",
                    "actor": "actor2"
                }
                // ... additional events can be added in this format
            ],
            "timeline2": [
                {
                    "time": "tomorrow",
                    "event": "event1",
                    "context": "context1",
                    "actor": "actor1"
                },
                {
                    "time": "day after tomorrow",
                    "event": "event2",
                    "context": "context2",
                    "actor": "actor2"
                }
                // ... additional events can be added in this format
            ]
            ,

            "mystery map": [
                {
                    "time": "tomorrow",
                    "event": "The discovery of a mysterious map",
                    "context": "In an old library, a hidden map is found behind ancient books",
                    "actor": "Librarian Mr. Adams"
                },
                {
                    "time": "day after tomorrow",
                    "event": "Deciphering the map",
                    "context": "Mr. Adams and local historian Ms. Johnson work together to decipher the map's secrets",
                    "actor": "Historian Ms. Johnson"
                },
                {
                    "time": "in three days",
                    "event": "The journey begins",
                    "context": "A team sets out following the map, leading them into dense woods",
                    "actor": "Explorer Dr. Lee"
                },
                {
                    "time": "in four days",
                    "event": "Discovery of an ancient ruin",
                    "context": "The team discovers hidden ruins, suggesting an ancient civilization",
                    "actor": "Archaeologist Prof. Smith"
                },
                {
                    "time": "in five days",
                    "event": "Unveiling the mystery",
                    "context": "A significant historical artifact is found, rewriting history",
                    "actor": "Museum Director Dr. Rivera"
                }
            ],

            "familyStory": [
                {
                    "time": "20 years ago",
                    "event": "The birth of twins",
                    "context": "In a small town, a family welcomes twin siblings, a boy and a girl, into the world.",
                    "actor": "Mother, Mrs. Thompson"
                },
                {
                    "time": "15 years ago",
                    "event": "The family moves to a new city",
                    "context": "The Thompson family relocates to a bigger city for better opportunities.",
                    "actor": "Father, Mr. Thompson"
                },
                {
                    "time": "10 years ago",
                    "event": "Twins' first day at a new school",
                    "context": "The twins start their first day in a new school, facing the challenges of making new friends.",
                    "actor": "Twins, Sarah and Sam Thompson"
                },
                {
                    "time": "5 years ago",
                    "event": "High school graduation",
                    "context": "The twins graduate from high school with honors, marking a milestone in their academic journey.",
                    "actor": "Twins, Sarah and Sam Thompson"
                },
                {
                    "time": "next week",
                    "event": "Family reunion",
                    "context": "The Thompson family plans a grand reunion to celebrate 20 years of growth, challenges, and success.",
                    "actor": "The entire Thompson family"
                }
            ],
            "projectStory": [
                {
                    "time": "two weeks ago",
                    "event": "Initial project briefing",
                    "context": "The team at the advertising company receives a brief for a major campaign from a high-profile client.",
                    "actor": "Project Manager, Alex Johnson"
                },
                {
                    "time": "a week ago",
                    "event": "Creative brainstorming session",
                    "context": "The creative team holds a brainstorming session to come up with innovative ideas for the campaign.",
                    "actor": "Creative Director, Lisa Chang"
                },
                {
                    "time": "today",
                    "event": "Client presentation",
                    "context": "The team presents their campaign ideas and strategies to the client for approval.",
                    "actor": "Account Executive, Mark Bennett"
                },
                {
                    "time": "tomorrow",
                    "event": "Production kickoff",
                    "context": "Following client approval, the team begins the production phase of the campaign.",
                    "actor": "Production Manager, Emily Garcia"
                },
                {
                    "time": "next week",
                    "event": "Campaign launch",
                    "context": "The advertising campaign is launched, showcasing the team's hard work and creativity.",
                    "actor": "Entire advertising team"
                }
            ],
            "holidayStory": [
                {
                    "time": "Six months ago",
                    "event": "Deciding the destination",
                    "context": "The Johnson family had been planning to spend Christmas in a cozy mountain cabin.",
                    "actor": "Family Patriarch, John Johnson",
                    "tense": "Past Perfect"
                },
                {
                    "time": "Four months ago",
                    "event": "Booking the cabin",
                    "context": "They booked a beautiful cabin after finding a great deal online.",
                    "actor": "Mother, Mary Johnson",
                    "tense": "Past Simple"
                },
                {
                    "time": "Two months ago",
                    "event": "Planning activities",
                    "context": "They were planning various activities like skiing and snowboarding for their trip.",
                    "actor": "Teenage Son, David Johnson",
                    "tense": "Past Continuous"
                },
                {
                    "time": "One month ago",
                    "event": "Shopping for winter gear",
                    "context": "They have shopped for winter gear, ensuring everyone is prepared for the cold.",
                    "actor": "Daughter, Emma Johnson",
                    "tense": "Present Perfect"
                },
                {
                    "time": "Three weeks ago",
                    "event": "Finalizing the itinerary",
                    "context": "They are finalizing their holiday itinerary, including a special Christmas Eve dinner.",
                    "actor": "Grandmother, Susan Johnson",
                    "tense": "Present Continuous"
                },
                {
                    "time": "Two weeks ago",
                    "event": "Sending out holiday cards",
                    "context": "They send out holiday cards to friends and family, sharing their upcoming vacation plans.",
                    "actor": "Mary Johnson",
                    "tense": "Present Simple"
                },
                {
                    "time": "One week ago",
                    "event": "Checking the weather forecast",
                    "context": "They will be checking the weather forecast to ensure safe travel conditions.",
                    "actor": "John Johnson",
                    "tense": "Future Simple"
                },
                {
                    "time": "Three days ago",
                    "event": "Packing for the trip",
                    "context": "They were packing their bags, excited about the upcoming holiday.",
                    "actor": "Entire Johnson Family",
                    "tense": "Past Perfect Continuous"
                },
                {
                    "time": "Yesterday",
                    "event": "Decorating the house",
                    "context": "They had been decorating their house before leaving, to return to a festive home.",
                    "actor": "Emma and David Johnson",
                    "tense": "Past Perfect Continuous"
                },
                {
                    "time": "Today",
                    "event": "Heading to the cabin",
                    "context": "They are currently on their way to the mountain cabin, looking forward to a memorable Christmas.",
                    "actor": "Entire Johnson Family",
                    "tense": "Present Continuous"
                },
                {
                    "time": "Tomorrow",
                    "event": "Arriving at the destination",
                    "context": "They will be arriving at the cabin, ready to start their holiday celebrations.",
                    "actor": "John Johnson",
                    "tense": "Future Continuous"
                },
                {
                    "time": "Next week",
                    "event": "Celebrating Christmas",
                    "context": "They will have celebrated a joyous and memorable Christmas in the mountains.",
                    "actor": "Mary Johnson",
                    "tense": "Future Perfect"
                }
            ],
            


            



            // ... additional timelines can be added in this format
        }
    };
    const timelineSelector = document.getElementById('timelineSelector');
    const timelineContainer = document.getElementById('timeline');

    // Assuming 'data' is defined and it has a property 'timelines' which is an object
    const sortedTimelineKeys = Object.keys(data.timelines).sort();

    // Populate the dropdown with sorted timelines
    sortedTimelineKeys.forEach(timeline => {
        let option = document.createElement('option');
        option.value = timeline;
        option.textContent = timeline;
        timelineSelector.appendChild(option);
    });

    // Function to render a selected timeline
    function renderTimeline(timelineKey) {
        const timelineData = data.timelines[timelineKey];
        timelineContainer.innerHTML = ''; // Clear existing timeline

        timelineData.forEach((item, index) => {
            const element = document.createElement('div');
            element.classList.add('timeline-item');
            element.innerHTML = `
                <div><strong>Time:</strong> ${item.time}</div>
                <div><strong>Event:</strong> ${item.event}</div>
                <div><strong>Context:</strong> ${item.context}</div>
                <div><strong>Actor:</strong> ${item.actor}</div>
                <div><strong>Tense:</strong> ${item.tense}</div>
            `;

            // Add connector except for the last item
            if (index < timelineData.length - 1) {
                const connector = document.createElement('div');
                connector.classList.add('connector');
                element.appendChild(connector);
            }

            timelineContainer.appendChild(element);
        });
    }

    // Event listener for dropdown change
    timelineSelector.addEventListener('change', function() {
        renderTimeline(this.value);
    });

    // Initially render the first timeline
    if (sortedTimelineKeys.length > 0) {
        renderTimeline(sortedTimelineKeys[0]);
    }
});