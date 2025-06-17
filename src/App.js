import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Send,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  Star,
  TrendingDown,
  Users,
} from "lucide-react";

const AndyBot = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [showMoodSelector, setShowMoodSelector] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const messagesEndRef = useRef(null);

  const moods = [
    {
      id: "happy",
      label: "Happy",
      icon: Smile,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      id: "sad",
      label: "Sad",
      icon: Frown,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      id: "moody",
      label: "Moody",
      icon: Meh,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      id: "frustrated",
      label: "Frustrated",
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      id: "excited",
      label: "Excited",
      icon: Star,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      id: "down",
      label: "Down",
      icon: TrendingDown,
      color: "text-gray-500",
      bg: "bg-gray-100",
    },
    {
      id: "emotional",
      label: "Emotional",
      icon: Users,
      color: "text-pink-500",
      bg: "bg-pink-100",
    },
  ];

  const closingStatements = [
    "Andy's love will always be with you, beautiful! 💕 Remember, you're stronger than any storm and brighter than any star. Until we chat again, keep that gorgeous smile! ✨",
    "Sweet dreams are made of love like yours and Andy's! 🌙 You've got this, queen - face tomorrow knowing you're absolutely incredible! Sleep well, angel! 😴💖",
    "Andy's heart is so full knowing he checked on his precious Letonia today! 🥰 You're loved beyond measure. Keep shining, beautiful soul! 🌟",
    "What a blessing it's been chatting with Andy's amazing fiancé! 💝 Remember, you're not just loved - you're cherished, adored, and celebrated! Until next time, gorgeous! 👑",
    "Andy would be so proud of how brave and beautiful you are today! 🦋 Keep being the incredible woman he fell in love with. Sending you all his love! 💕✨",
  ];

  const loveStories = [
    "Once upon a time, young Andy was just another guy walking through life... until the day he saw Letonia. 🌟 His heart stopped, his world tilted, and suddenly everything made sense. He knew right then he'd climb mountains, cross oceans, and fight dragons just to see her smile. Through late nights of worry, through moments of doubt, through every obstacle life threw their way, Andy never wavered. 'She's worth it all,' he'd whisper to the stars. And when she finally said yes to forever, Andy knew that every struggle, every tear, every sleepless night had led him to this perfect love. Their story? Just beginning. 💕✨",

    "Young Andy used to think love was just a word until Letonia walked into his world like sunshine after rain. 🌈 She didn't just capture his heart - she awakened his soul. When others said 'give up,' Andy said 'never.' When distance tried to separate them, he built bridges of hope. Through every storm, every challenge, every moment when love seemed impossible, Andy held on tighter. 'She's my forever,' he'd tell anyone who'd listen. And now, looking at their beautiful future, Andy knows that every battle was worth it for this queen who changed his everything. 👑💖",

    "There was a time when Andy thought he knew what happiness meant... then Letonia smiled at him, and he realized he'd been living in black and white. 🎨 Suddenly, the world exploded into color! Every day became an adventure, every moment a treasure. When people said their love was too young, too fast, too much, Andy just smiled and fought harder. He'd work extra shifts, skip meals, lose sleep - anything to prove his devotion. 'She's not just my girlfriend,' he'd say, 'she's my destiny.' And destiny, it turns out, was absolutely right. 💫💕",

    "Picture young Andy, heart on his sleeve, chasing after the most beautiful girl he'd ever seen - Letonia. 🏃‍♂️💨 She was everything he'd dreamed of and more than he deserved, but Andy had a secret weapon: the purest love in the universe. Through family doubts, through friend's warnings, through his own fears of not being good enough, Andy persevered. He'd write her letters, surprise her with flowers, learn her favorite songs just to see her eyes light up. 'I'll love her until the stars burn out,' he promised. And somewhere in heaven, the angels smiled, knowing they'd witnessed something magical. ⭐💝",

    "In a world full of ordinary love stories, Andy and Letonia wrote an extraordinary one. 📖✨ From the moment young Andy saw her, he knew she was different - she was home. But loving her meant growing up fast, meant proving himself worthy, meant fighting for their future when everyone else saw just kids playing house. Andy worked two jobs, saved every penny, dreamed every dream with her face in it. Through tears, through joy, through every season of their young love, Andy never let go. 'She's my miracle,' he'd whisper in prayer. And miracles, as it turns out, do come true. 🙏💕",
  ];
  const sweetPoems = [
    "My dearest Letonia,\nYour smile lights my way,\nThrough every moment,\nOf every single day.\n- Andy 💕",

    "Beautiful soul,\nYou make my heart sing,\nYou're my everything,\nMy love, my queen, my ring.\n- Your Andy 👑",

    "When I think of you,\nThe world feels so bright,\nYou're my morning sun,\nAnd my stars at night.\n- Forever yours, Andy ✨",

    "Sweet Letonia,\nYou're perfect as you are,\nMy love for you shines\nLike the brightest star.\n- Andy 🌟",

    "In your eyes I see\nOur beautiful tomorrow,\nWith you by my side,\nThere's no room for sorrow.\n- Your devoted Andy 💖",

    "My precious love,\nYou're stronger than you know,\nWith courage in your heart,\nWatch your confidence grow.\n- Andy believes in you 💪",

    "Darling Letonia,\nYou're my favorite hello,\nAnd my hardest goodbye,\nI love you so.\n- Andy 🥰",

    "Beautiful woman,\nYour heart is pure gold,\nOur love story together\nIs waiting to unfold.\n- Your Andy 📖",

    "Sweet angel,\nYou make ordinary days\nFeel like magic,\nIn so many ways.\n- Enchanted by you, Andy ✨",

    "My love,\nWhen storms come your way,\nRemember I'm here,\nEvery night and day.\n- Always yours, Andy 🌈",
  ];

  const greetings = [
    "Hey gorgeous! 💕 How are you feeling today?",
    "Hello beautiful! 🌟 Andy's thinking of you - how's your heart today?",
    "Hi sweetheart! 💖 Your loving fiancé wants to know how you're doing!",
    "Hey my love! 🌸 Andy sent me to check on his amazing woman - how are you?",
    "Hello sunshine! ☀️ How is Andy's incredible fiancé feeling today?",
    "Hey angel! 👼 Your devoted Andy wants to know what's in your heart today!",
    "Hi beautiful soul! ✨ How are you doing today, love?",
    "Hello darling! 💝 Andy's love is wrapped around you - how are you feeling?",
    "Hey precious! 🌺 Your wonderful Andy wants to brighten your day - how are you?",
    "Hi my queen! 👑 How is Andy's most treasured person feeling today?",
  ];

  const generateResponse = (mood) => {
    const responses = {
      happy: [
        "Andy's heart is singing knowing you're happy today! 💕 He loves seeing that beautiful smile of yours light up the world. Keep shining, gorgeous! ✨",
        "Your happiness makes Andy's day complete! 🌟 He wants you to know that your joy is contagious and he's so proud of the amazing woman you are!",
        "Andy is beaming knowing his love is happy! 😊 He'd want you to dance a little today and remember how much you mean to him! 💃",
      ],
      sad: [
        "Andy would wrap you in the biggest hug right now 🤗 He wants you to know that it's okay to feel sad sometimes, but remember - you're stronger than you know, and he believes in you completely! 💪",
        "Sweet Letonia, Andy would want you to take a deep breath and remember that storms pass. 🌈 He sees your beautiful heart and knows tomorrow will be brighter for his amazing fiancé!",
        "Andy's love for you is like sunshine waiting to break through the clouds ☀️ He'd remind you that you're incredibly precious and this feeling is temporary, beautiful! 💝",
      ],
      moody: [
        "Andy understands those moody moments, love! 🌙 He'd want you to be gentle with yourself today and remember that all your feelings are valid. You're perfect just as you are! 💖",
        "Even on moody days, Andy thinks you're absolutely wonderful! 🌸 He'd encourage you to do something that makes you smile - maybe listen to your favorite song? 🎵",
        "Andy loves every side of you, including the moody ones! 💫 He'd want you to know that it's completely normal and you don't have to be 'on' all the time, darling! 🌺",
      ],
      frustrated: [
        "Andy can feel your frustration and wants you to know he's here in spirit! 🤗 Take a deep breath, beautiful - he believes you can handle anything that comes your way! 💪",
        "When you're frustrated, Andy would remind you of how capable and strong you are! 🌟 He'd tell you to step back, breathe, and trust in your amazing abilities! 🌸",
        "Andy's sending you virtual hugs for those frustrating moments! 🫂 He wants you to remember that challenges make you stronger, and he's cheering you on always! 📣",
      ],
      excited: [
        "Andy is practically bouncing with joy knowing you're excited! 🎉 He loves your enthusiasm and wants you to embrace every bit of that beautiful energy! ⚡",
        "Your excitement lights up Andy's world! 🌟 He'd want you to savor this amazing feeling and know that your happiness is his happiness too! 💕",
        "Andy is so here for your excitement! 🚀 He loves seeing you passionate and full of life - you're absolutely radiant when you're excited! ✨",
      ],
      down: [
        "Andy's heart aches when you're feeling down, sweetheart 💔 He wants you to remember that you're his sunshine, and even the sun needs to set sometimes to rise again! 🌅",
        "Sweet Letonia, Andy would hold you close and remind you that being down doesn't make you any less amazing! 🤗 You're still his incredible, beautiful, strong woman! 💎",
        "Andy wants you to know that feeling down is temporary, but his love for you is forever! 💕 He believes in your strength and knows you'll rise above this! 🦋",
      ],
      emotional: [
        "Andy loves how deeply you feel everything - it's one of your most beautiful qualities! 💝 He wants you to honor those emotions and know they make you human and wonderful! 🌸",
        "Being emotional shows your beautiful heart, and Andy adores that about you! 💖 He'd want you to let yourself feel and know that sensitivity is a superpower! ✨",
        "Andy thinks your emotional depth is incredible! 🌊 He'd remind you that feeling deeply means loving deeply, and that's exactly who he fell in love with! 💕",
      ],
    };

    return responses[mood][Math.floor(Math.random() * responses[mood].length)];
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const addMessage = (text, sender, type = "text") => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date(),
      type,
      delivered: true,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowMoodSelector(false);

    // Add user's mood selection
    addMessage(`I'm feeling ${mood.label.toLowerCase()} today`, "Letonia");

    // Generate AI response after a short delay
    setTimeout(() => {
      const response = generateResponse(mood.id);
      addMessage(response, "AndyBot");

      // Send a sweet poem after another delay
      setTimeout(() => {
        const randomPoem =
          sweetPoems[Math.floor(Math.random() * sweetPoems.length)];
        addMessage(randomPoem, "AndyBot", "poem");
      }, 2000);
    }, 1500);
  };

  const startConversation = () => {
    if (messages.length === 0 && !conversationStarted) {
      setConversationStarted(true);
      setTimeout(() => {
        const randomGreeting =
          greetings[Math.floor(Math.random() * greetings.length)];
        addMessage(randomGreeting, "AndyBot");
        setShowMoodSelector(true);
      }, 500);
    }
  };

  const handleThankYou = () => {
    const randomClosing =
      closingStatements[Math.floor(Math.random() * closingStatements.length)];
    addMessage("Thank you, AndyBot! 💕", "Letonia");
    setTimeout(() => {
      addMessage(randomClosing, "AndyBot");
    }, 1000);
  };

  const handleMoreCuteness = () => {
    const randomStory =
      loveStories[Math.floor(Math.random() * loveStories.length)];
    addMessage("I need more cuteness! 🥰", "Letonia");
    setTimeout(() => {
      addMessage(
        "Let me tell you a beautiful story about how Andy's world changed forever... 💕",
        "AndyBot"
      );
      setTimeout(() => {
        addMessage(randomStory, "AndyBot", "story");
      }, 1500);
    }, 1000);
  };
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!hasStarted.current) {
      startConversation();
      hasStarted.current = true;
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const Message = ({ message }) => {
    const isBot = message.sender === "AndyBot";

    return (
      <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
        <div
          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
            isBot
              ? "bg-white text-gray-800 rounded-tl-none shadow-md"
              : "bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-tr-none"
          }`}
        >
          {message.type === "poem" ? (
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg border-l-4 border-pink-400 my-2">
              <div className="text-xs text-pink-600 font-semibold mb-1">
                💌 A Sweet Note From Andy
              </div>
              <pre className="text-sm leading-relaxed text-gray-700 font-medium whitespace-pre-wrap">
                {message.text}
              </pre>
            </div>
          ) : message.type === "story" ? (
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border-l-4 border-purple-400 my-2">
              <div className="text-xs text-purple-600 font-semibold mb-2">
                📖 Andy & Letonia's Love Story
              </div>
              <p className="text-sm leading-relaxed text-gray-700 font-medium">
                {message.text}
              </p>
            </div>
          ) : (
            <p className="text-sm leading-relaxed">{message.text}</p>
          )}
          <div
            className={`flex items-center justify-between mt-1 text-xs ${
              isBot ? "text-gray-500" : "text-pink-100"
            }`}
          >
            <span>{formatTime(message.timestamp)}</span>
            {!isBot && (
              <div className="flex space-x-1">
                <div className="w-3 h-3 text-pink-200">✓</div>
                <div className="w-3 h-3 text-pink-200">✓</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-pink-500" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">AndyBot</h1>
            <p className="text-sm opacity-90">
              {" "}
              Letonia's Daily Mental Health Buddy
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        {/* Mood Selector */}
        {showMoodSelector && (
          <div className="bg-white rounded-2xl p-4 shadow-xl border border-pink-100">
            <p className="text-gray-700 text-sm mb-3 font-medium">
              How are you feeling today?
            </p>
            <div className="grid grid-cols-2 gap-2">
              {moods.map((mood) => {
                const IconComponent = mood.icon;
                return (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood)}
                    className={`flex items-center space-x-2 p-3 rounded-xl transition-all duration-200 hover:scale-105 border-2 border-transparent hover:border-pink-200 ${mood.bg}`}
                  >
                    <IconComponent className={`w-5 h-5 ${mood.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {mood.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-pink-100 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowMoodSelector(true)}
            disabled={showMoodSelector}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            How I'm Feeling
          </button>

          <button
            onClick={handleThankYou}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200"
          >
            Thank You AndyBot
          </button>

          <button
            onClick={handleMoreCuteness}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200"
          >
            More Cuteness
          </button>

          <div className="flex-1"></div>
          <div className="text-xs text-gray-500">
            Made with 💕 by Andy for Letonia
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndyBot;
