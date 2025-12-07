import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '516'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '247'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b8e'),
            routes: [
              {
                path: '/docs/AI-for-Robotics-From-Learning-to-Reasoning/Foundation-Models-for-Robotics',
                component: ComponentCreator('/docs/AI-for-Robotics-From-Learning-to-Reasoning/Foundation-Models-for-Robotics', 'b23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/AI-for-Robotics-From-Learning-to-Reasoning/Multi-modal-Reasoning-for-Physical-Agents',
                component: ComponentCreator('/docs/AI-for-Robotics-From-Learning-to-Reasoning/Multi-modal-Reasoning-for-Physical-Agents', 'bf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/AI-for-Robotics-From-Learning-to-Reasoning/plan',
                component: ComponentCreator('/docs/AI-for-Robotics-From-Learning-to-Reasoning/plan', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/AI-for-Robotics-From-Learning-to-Reasoning/World-Models-and-Predictive-Control',
                component: ComponentCreator('/docs/AI-for-Robotics-From-Learning-to-Reasoning/World-Models-and-Predictive-Control', 'dd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bibliography',
                component: ComponentCreator('/docs/bibliography', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blueprint',
                component: ComponentCreator('/docs/blueprint', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/glossary',
                component: ComponentCreator('/docs/glossary', 'a11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Humanoid-Robotics-Hardware-and-Morphology/Actuators-and-Sensors-The-Building-Blocks-of-Movement',
                component: ComponentCreator('/docs/Humanoid-Robotics-Hardware-and-Morphology/Actuators-and-Sensors-The-Building-Blocks-of-Movement', 'c47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Humanoid-Robotics-Hardware-and-Morphology/Kinematics-and-Dynamics-The-Science-of-Motion',
                component: ComponentCreator('/docs/Humanoid-Robotics-Hardware-and-Morphology/Kinematics-and-Dynamics-The-Science-of-Motion', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Humanoid-Robotics-Hardware-and-Morphology/plan',
                component: ComponentCreator('/docs/Humanoid-Robotics-Hardware-and-Morphology/plan', 'e72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Humanoid-Robotics-Hardware-and-Morphology/Power-Systems-and-Energy-Efficiency',
                component: ComponentCreator('/docs/Humanoid-Robotics-Hardware-and-Morphology/Power-Systems-and-Energy-Efficiency', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction-to-Physical-AI/A-Brief-History-of-AI-and-Robotics',
                component: ComponentCreator('/docs/Introduction-to-Physical-AI/A-Brief-History-of-AI-and-Robotics', '122'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction-to-Physical-AI/plan',
                component: ComponentCreator('/docs/Introduction-to-Physical-AI/plan', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction-to-Physical-AI/The-Perception-Action-Loop-A-Core-Concept',
                component: ComponentCreator('/docs/Introduction-to-Physical-AI/The-Perception-Action-Loop-A-Core-Concept', 'f52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction-to-Physical-AI/What-is-Physical-AI',
                component: ComponentCreator('/docs/Introduction-to-Physical-AI/What-is-Physical-AI', 'e59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Locomotion-and-Control/Advanced-Control-Strategies',
                component: ComponentCreator('/docs/Locomotion-and-Control/Advanced-Control-Strategies', '2c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Locomotion-and-Control/Grasping-and-Manipulation',
                component: ComponentCreator('/docs/Locomotion-and-Control/Grasping-and-Manipulation', '7c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Locomotion-and-Control/plan',
                component: ComponentCreator('/docs/Locomotion-and-Control/plan', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Locomotion-and-Control/Principles-of-Bipedal-Locomotion',
                component: ComponentCreator('/docs/Locomotion-and-Control/Principles-of-Bipedal-Locomotion', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Safety-Ethics-and-Human-Robot-Interaction/Human-Robot-Interaction-Protocols',
                component: ComponentCreator('/docs/Safety-Ethics-and-Human-Robot-Interaction/Human-Robot-Interaction-Protocols', '43b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Safety-Ethics-and-Human-Robot-Interaction/Physical-AI-Alignment-Issues',
                component: ComponentCreator('/docs/Safety-Ethics-and-Human-Robot-Interaction/Physical-AI-Alignment-Issues', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Safety-Ethics-and-Human-Robot-Interaction/plan',
                component: ComponentCreator('/docs/Safety-Ethics-and-Human-Robot-Interaction/plan', '73d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Safety-Ethics-and-Human-Robot-Interaction/Robotics-Safety-Standards',
                component: ComponentCreator('/docs/Safety-Ethics-and-Human-Robot-Interaction/Robotics-Safety-Standards', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
