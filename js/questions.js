const qnaList = [
    {
      q: '1. How do you handle pressure in a game situation?',
      a: [
        { answer: 'a. I thrive under pressure and take control.', type: ['Tatum', 'Brown', 'Holiday'] },
        { answer: 'b. I stay calm and support my teammates.', type: ['Horford', 'White', 'Kornet'] },
        { answer: 'c. I focus on my specific role and execute.', type: ['Pritchard', 'Hauser', 'Brissett'] },
      ]
    },
    {
      q: '2. What’s your approach to defense?',
      a: [
        { answer: 'a. Aggressive, always going for the steal.', type: ['Smart', 'Brown', 'Holiday'] },
        { answer: 'b. Solid positioning and staying in front of my man.', type: ['Horford', 'Williams', 'Porzingis'] },
        { answer: 'c. Communication and helping my teammates.', type: ['White', 'Kornet', 'Stevens'] },
      ]
    },
    {
      q: '3. How do you prepare for a big game?',
      a: [
        { answer: 'a. Intense focus and mental preparation.', type: ['Tatum', 'Brown', 'Holiday'] },
        { answer: 'b. Listening to music and visualizing plays.', type: ['Smart', 'White', 'Williams'] },
        { answer: 'c. Relaxing and keeping things light.', type: ['Pritchard', 'Hauser', 'Brissett'] },
      ]
    },
    {
      q: '4. What’s your style of play?',
      a: [
        { answer: 'a. Fast-paced and aggressive.', type: ['Brown', 'Tatum', 'Holiday'] },
        { answer: 'b. Methodical and strategic.', type: ['Horford', 'Williams', 'Porzingis'] },
        { answer: 'c. Versatile and adaptive.', type: ['Smart', 'White', 'Pritchard'] },
      ]
    },
    {
      q: '5. What motivates you on the court?',
      a: [
        { answer: 'a. Winning and competition.', type: ['Tatum', 'Brown', 'Holiday'] },
        { answer: 'b. Teamwork and camaraderie.', type: ['Horford', 'White', 'Williams'] },
        { answer: 'c. Personal improvement and growth.', type: ['Pritchard', 'Hauser', 'Brissett'] },
      ]
    },
    {
      q: '6. How do you contribute to team chemistry?',
      a: [
        { answer: 'a. By being a vocal leader and motivator.', type: ['Smart', 'Horford', 'Holiday'] },
        { answer: 'b. Through consistent performance and reliability.', type: ['Tatum', 'Brown', 'White'] },
        { answer: 'c. By being a positive presence and supporting teammates.', type: ['Williams', 'Pritchard', 'Kornet'] },
      ]
    },
    {
      q: '7. What’s your approach to training and improvement?',
      a: [
        { answer: 'a. Constantly working on all aspects of my game.', type: ['Tatum', 'Brown', 'Holiday'] },
        { answer: 'b. Focusing on specific skills to master them.', type: ['White', 'Williams', 'Porzingis'] },
        { answer: 'c. Balancing training with rest and recovery.', type: ['Horford', 'Pritchard', 'Kornet'] },
      ]
    },
    {
      q: '8. How do you handle tough losses?',
      a: [
        { answer: 'a. Reflect on the game and focus on improvement.', type: ['Tatum', 'Brown', 'Smart'] },
        { answer: 'b. Stay positive and encourage the team.', type: ['Horford', 'White', 'Holiday'] },
        { answer: 'c. Move on quickly and prepare for the next game.', type: ['Williams', 'Pritchard', 'Hauser'] },
      ]
    },
    {
      q: '9. What role do you play in the team’s offense?',
      a: [
        { answer: 'a. Primary scorer and playmaker.', type: ['Tatum', 'Brown', 'Holiday'] },
        { answer: 'b. Facilitator and setup player.', type: ['White', 'Smart', 'Horford'] },
        { answer: 'c. Support role, providing spacing and shooting.', type: ['Pritchard', 'Hauser', 'Porzingis'] },
      ]
    },
    {
      q: '10. How do you balance personal and team goals?',
      a: [
        { answer: 'a. Always prioritize team success over personal stats.', type: ['Horford', 'White', 'Holiday'] },
        { answer: 'b. Strive for personal excellence as a means to help the team.', type: ['Tatum', 'Brown', 'Williams'] },
        { answer: 'c. Find a balance, contributing in any way needed.', type: ['Smart', 'Pritchard', 'Hauser'] },
      ]
    },
    {
      q: '11. How long is your shower?',
      a: [
        { answer: 'a. Quick, I don’t like to waste time.', type: ['Tatum', 'Brown', 'Pritchard'] },
        { answer: 'b. Average, just enough to refresh.', type: ['Horford', 'White', 'Hauser'] },
        { answer: 'c. Long, I enjoy my time in the shower and somehow have my lips bleeding.', type: ['rAyan El-Kaissi', 'Williams', 'Smart'] },
      ]
    },
    {
      q: '12. How long does it take you to pack up for PAC?',
      a: [
        { answer: 'a. I pack quickly and efficiently.', type: ['Holiday', 'Horford', 'Brown'] },
        { answer: 'b. I take my time to make sure I have everything.', type: ['Tatum', 'Pritchard', 'Hauser'] },
        { answer: "c. It takes me forever to get ready, but I still tell Jaden that I'm almost done packing.", type: ['Lyn vs Jeong'] },
      ]
    },
    {
      q: '13. Are you bald?',
      a: [
        { answer: 'a. Yes, I embrace my baldness.', type: ['Vilo Rao Bangalore Oakville Waterloo Mahesh'] },
        { answer: 'b. No, I have a full head of hair.', type: ['Tatum', 'Brown', 'Holiday', 'Smart'] },
      ]
    },
    {
      q: '14. Are you a stubborn Celtics fan who doesn’t admit that their logo is ugly?',
      a: [
        { answer: 'a. Absolutely, Celtics for life!', type: ['Jaden Lungidance'] },
        { answer: 'b. I’m a fan, but I can be honest about the logo.', type: ['Tatum', 'Brown', 'Holiday', 'Horford'] },
      ]
    },
  ];
  
  const infoList = [
    {
      name: 'The Leader: Jayson Tatum',
      desc: 'As a leader on and off the court, you excel in high-pressure situations. You are a skilled player with a great sense of the game, always aiming to be the best and lead your team to victory.'
    },
    {
      name: 'The Defensive Anchor: Marcus Smart',
      desc: 'You are the heart of the team’s defense, known for your tenacity and ability to disrupt the opponent’s game. Your leadership and communication are key to the team’s success.'
    },
    {
      name: 'The Versatile Scorer: Jaylen Brown',
      desc: 'Your versatility makes you a valuable player, capable of contributing on both ends of the court. You thrive on athleticism and bring energy to every game.'
    },
    {
      name: 'The Veteran Presence: Al Horford',
      desc: 'With years of experience, you bring a calm and steady presence to the team. Your leadership and ability to make smart plays are invaluable.'
    },
    {
      name: 'The Steady Hand: Derrick White',
      desc: 'Known for your solid defense and reliable shooting, you provide stability and consistency on the court. Your unselfish play is crucial to the team’s cohesion.'
    },
    {
      name: 'The Emerging Star: Robert Williams',
      desc: 'Your athleticism and defensive prowess make you a standout player. You bring energy and rim protection, anchoring the defense with your shot-blocking ability.'
    },
    {
      name: 'The Shooter: Sam Hauser',
      desc: 'With a sharp shooting touch, you are a threat from beyond the arc. Your ability to space the floor opens up opportunities for your teammates.'
    },
    {
      name: 'The Role Player: Payton Pritchard',
      desc: 'You excel in your role, providing energy, shooting, and hustle. Your hard work and dedication make you a fan favorite.'
    },
    {
      name: 'The Big Man: Kristaps Porzingis',
      desc: 'With your height and skill set, you are a unique player who can shoot from outside and protect the rim. Your versatility adds a dynamic element to the team.'
    },
    {
      name: 'The Veteran Guard: Jrue Holiday',
      desc: 'Known for your defense and playmaking, you bring leadership and experience to the backcourt. Your ability to make clutch plays in critical moments is highly valued.'
    },
    {
      name: 'The Utility Player: Oshae Brissett',
      desc: 'Your versatility allows you to play multiple positions and contribute in various ways. You bring energy and a team-first mentality to the game.'
    },
    {
      name: 'The Young Talent: Jordan Walsh',
      desc: 'As a developing player, you show great potential and eagerness to learn. Your athleticism and work ethic suggest a bright future ahead.'
    },
    {
      name: 'The Reliable Center: Luke Kornet',
      desc: 'Providing size and rebounding, you are a steady presence in the paint. Your understanding of your role helps maintain team balance.'
    },
    {
      name: 'The Defensive Specialist: Justin Champagnie',
      desc: 'Known for your defensive intensity and hustle, you provide energy off the bench. Your contributions often go beyond the stat sheet, impacting the game in various ways.'
    },
    {
      name: 'The Two-Way Player: JD Davison',
      desc: 'You bring a balanced game to the court, contributing on both offense and defense. Your ability to adapt and fill different roles makes you a valuable asset to the team.'
    },
    {
      name: 'The Korean Snack Vanisher: Lyn vs Jeong',
      desc: 'You always have korean snacks in your bag, sometimes confusing others with the gingerbread version of yourself. Highly spawned at QNC and STC, you are always working on something but never quite finishing anything. A pro rummikub player, especially against certain opponents (jaden lungidance). You also have a hidden power: when you start packing for PAC, time passes by 2x faster!'
    },
    {
      name: 'The Unhinged Shower Master: rAyan El-Kaissi',
      desc: "Known for your unhinged jokes that balance the group’s average mental age to be 81.5. You take exceptionally long showers that could lead to wrong life decisions and have a peculiar issue with bleeding lips. A famous game dev, the creator of a unique hotdog game. Has multiple personalities to admit that you are a chosen gaming chair. You also have a hidden power: when you show up, everyone dips!"
    },
    {
      name: 'The Bald Supporter: Vilo Rao Bangalore Oakville Waterloo Mahesh',
      desc: "Bald and proud, you are smart and kind-hearted, often helping others such as willy and timsort. You tend to be working on the most bizare things ever, like the constant 'K'. You are the only one who can understand rayan's jokes. Despite sometimes betraying others by changing your sequence, your heart is always in the right place. You also have a hidden power: you draw in randos everywhere you go!"
    },
    {
      name: 'The BBALL Hyper: Jaden Lungidance',
      desc: "A professional lungidancer, you wear see-through socks to interviews, grind on the most random things, and keeps streaks for the weirdest things. You hate to admit that lyn is a better rummikub player, instead keep on betting on the steps thinking that you could win. You are a firm m'O'sala believer and a stalker fan of 'min2345'. You also have a hidden power: you can explain taylor theorem & polynomials 5+ times to lyn while she doesn't know that you've been explaining this to her 5+ times!"
    }
  ];