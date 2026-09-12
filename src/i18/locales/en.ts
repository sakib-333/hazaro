export default {
    /*──Bottom tabs───────────────────────*/
    bottomTabs: {
        games: "Games",
        create: "create",
        history: "History",
        settings: "Settings",
    },

    /*──Screens───────────────────────*/
    games: {
        search_games: "Search Games",
    },
    common: {
        language: "Language",
    },

    settings: {
        sections: {
            appearance: "Appearance",
            preferences: "Preferences",
            game: "Game",
            about: "About",
        },

        screenTitles: {
            theme: "Theme",
            language: "Language",
            defaultWinningScore: "Default Winning Score",
            howToPlay: "How to Play",
            about: "About",
            feedback: "Feedback",
            privacyPolicy: "Privacy Policy",
        },

        items: {
            theme: {
                title: "Theme",
                description: "Choose light, dark, or system theme",
            },
            language: {
                title: "Language",
                description: "Choose your preferred language",
            },
            defaultWinningScore: {
                title: "Default Winning Score",
                description: "Set the default score required to win",
            },
            howToPlay: {
                title: "How to Play",
                description: "Learn how to play Hazari",
            },
            about: {
                title: "About Hazaro",
                description: "Learn more about Hazaro",
            },
            feedback: {
                title: "Feedback",
                description: "Share your feedback with us",
            },
            privacyPolicy: {
                title: "Privacy Policy",
                description: "Read our privacy policy",
            },
        },

        theme: {
            description: "Choose how Hazaro should look.",
            appearance: "Appearance",
            options: {
                system: {
                    title: "System",
                    description: "Follow your device setting",
                },
                light: {
                    title: "Light",
                    description: "Always use light mode",
                },
                dark: {
                    title: "Dark",
                    description: "Always use dark mode",
                },
            },
        },

        about: {
            sections: {
                about: "About Hazaro",
                features: "Features",
                appInformation: "App Information",
            },
            description: "Hazaro is a simple score tracking app designed to make keeping track of scores during a game quick and effortless.",
            instructions: "Create a game, add players, record scores after each round, and let Hazaro keep track of the totals for you.",
            footer: "Made with care for Hazaro players.",
        },

        feedback: {
            description: "Have a suggestion, found a problem, or want to share your thoughts? Send us your feedback.",
            name: {
                label: "Name",
                placeholder: "Enter your name",
                required: "Name is required",
            },
            email: {
                label: "Email",
                placeholder: "Enter your email",
                required: "Email is required",
                invalid: "Enter a valid email address",
            },
            typeRequired: "Feedback type is required",
            details: {
                label: "Details",
                placeholder: "Tell us more about your feedback...",
                required: "Details are required",
            },
            submit: "Send Feedback",
        },

        howToPlay: {
            description: "Learn how scoring works and how to win a game of Hazaro.",
            sections: {
                gameOverview: "Game Overview",
                cardScoring: "Card Scoring",
                roundScoring: "Round Scoring",
                winning: "Winning the Game",
            },
            round: {
                title: "Record scores after each round",
                description: "After every round, enter the score earned by each player. The scores are added to each player's running total throughout the game.",
            },
        },

        privacyPolicy: {
            introduction: {
                title: "Introduction",
                description1: "Hazaro is a score tracking app designed to help players keep track of games, rounds, and scores. We respect your privacy and aim to keep the information handled by the app limited to what is needed to provide its features.",
                description2: "This Privacy Policy explains what information Hazaro handles, how that information is used, where it is stored, and the choices available to you.",
            },
            collection: {
                title: "Information We Collect",
                description: "Hazaro may handle information that you enter while using the app.",
                game: {
                    title: "Game Information",
                    description: "When you create and manage a game, the app may store the game name, player names, player scores, round information, game creation and update times, and the winning score configured for the game.",
                },
                feedback: {
                    title: "Feedback Information",
                    description: "When you use the Feedback feature, you may provide your name, email address, feedback type, and feedback details.",
                },
                preferences: {
                    title: "App Preferences",
                    description: "Hazaro may store app preferences such as your selected theme and language so that the app can provide the experience you selected.",
                },
            },
            usage: {
                title: "How We Use Your Information",
                description1: "Information handled by Hazaro is used to provide the features of the app.",
                description2: "Game information is used to create games, maintain player information, record round scores, calculate running totals, determine when a player reaches the configured winning score, and display game history.",
                description3: "Feedback information is used to understand your comments, identify problems, consider feature requests, and improve Hazaro.",
                description4: "App preferences are used to remember choices such as your preferred language and theme.",
            },
            storage: {
                title: "Data Storage",
                description1: "Game-related information and app preferences are stored locally on your device using the app's local storage. This allows Hazaro to retain your games, scores, history, and selected preferences when you continue using the app.",
                description2: "Locally stored game information remains on your device unless you delete it through the features provided by the app or remove the app from your device.",
            },
            feedback: {
                title: "Feedback",
                description1: "If you submit feedback through Hazaro, the information you provide may be transmitted to the service used to receive and process that feedback.",
                description2: "Please avoid including passwords, payment information, or other sensitive information in your feedback.",
            },
            sharing: {
                title: "Data Sharing",
                description1: "Hazaro does not sell your personal information.",
                description2: "Game information stored locally on your device is not shared by Hazaro simply because you use the app. Information that you voluntarily submit through features such as feedback may be processed by the service used to receive that submission.",
                description3: "We may also disclose information when required to comply with applicable law or to protect the security, rights, or integrity of the app and its users.",
            },
            thirdParty: {
                title: "Third-Party Services",
                description1: "Hazaro may use third-party services when they are required to provide specific app functionality. Information sent to such services is handled according to the relevant service's privacy policy and terms.",
                description2: "We do not consider libraries used only to build the application to be data-collecting services unless they actually receive or process user information.",
            },
            security: {
                title: "Data Security",
                description: "We take reasonable measures to protect information handled by Hazaro. However, no electronic storage system or method of transmitting information can be guaranteed to be completely secure.",
            },
            children: {
                title: "Children's Privacy",
                description1: "Hazaro is intended for general use and does not intentionally collect personal information from children for purposes that require parental consent.",
                description2: "If you believe that a child has provided personal information through a feature of Hazaro, please contact us so that we can review the situation and take appropriate action.",
            },
            choices: {
                title: "Your Choices",
                description1: "You can manage the game information stored by Hazaro using the game's available management and deletion features.",
                description2: "You can also choose whether to provide information when using features such as feedback. Information required by a particular feature may be necessary to use that feature.",
                description3: "If you have questions about information submitted through the app, you can contact us using the contact information provided below.",
            },
            changes: {
                title: "Changes to This Privacy Policy",
                description1: "We may update this Privacy Policy when Hazaro's features, data handling practices, or applicable requirements change.",
                description2: "When the policy is updated, the revised version will be made available within the app and the ‘Last updated’ date will be changed accordingly.",
            },
            contact: "Contact Us",
        },

        language: {
            description: "Choose the language you want to use in Hazaro.",

            english: {
                title: "English",
                description: "Use English throughout the app",
            },

            bangla: {
                title: "Bangla",
                description: "Use Bangla throughout the app",
            },
        },
    },

    game: {
        createGame: {
            title: "Create Game",
            gameSettings: "Game Settings",
            gameName: {
                label: "Game Name",
                placeholder: "e.g. Friday Night Game",
                required: "Game name is required",
                minLength: "Game name must be at least 2 characters",
            },
            winningScore: {
                label: "Winning Score",
                placeholder: "1000",
                unit: "pts",
                required: "Winning score is required",
                min: "Winning score must be greater than 0",
            },
            players: "Players",
            player: {
                placeholder: "Player {{number}}",
                required: "Player {{number}} name is required",
            },
            submit: "Create Game",
        },
        editGame: {
            title: "Edit Game",
            gameSettings: "Game Settings",
            gameName: {
                label: "Game Name",
                placeholder: "e.g. Friday Night Game",
                required: "Game name is required",
                minLength: "Game name must be at least 2 characters",
            },
            winningScore: {
                label: "Winning Score",
                placeholder: "1000",
                unit: "pts",
                required: "Winning score is required",
                min: "Winning score must be greater than 0",
            },
            players: "Players",
            player: {
                placeholder: "Player {{number}}",
                required: "Player {{number}} name is required",
            },
            submit: "Save Changes",
        }
    },

    /*──Game details───────────────────────*/
    gameDetails: {
        title: "Game Details",
        headerActions: {
            edit: "Edit",
            delete: "Delete",
        },
        actions: {
            more: "More options",
            addScore: "Add score",
            deleteScore: "Delete score",
        },
        scoreboard: {
            title: "Scoreboard",
            rank: "Rank",
            player: "Player",
            score: "Score",
        },
        pointTable: {
            title: "Point table",
            round: "#",
        },
        gameInfo: {
            addScore: "Add score",
        }
    }
};
