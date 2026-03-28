import { Deal } from '../types';

export const MOCK_DEALS: Deal[] = [
  {
    id: '1',
    address: '124 Oakwood Drive, Austin, TX 78704',
    sellerName: 'Sarah & Michael Jenkins',
    stage: 'Pre-Listing',
    currentStep: 'Waiting for disclosures',
    completedSteps: 5,
    totalSteps: 9,
    daysInStage: 2,
    listPrice: '$845,000',
    timeline: 'Targeting April 15 Launch',
    tasks: [
      { id: 't1', title: 'Property details completed', status: 'completed' },
      { id: 't2', title: 'Seller disclosure pending', status: 'pending', description: 'Waiting for Sarah to sign the lead-based paint disclosure.' },
      { id: 't3', title: 'Missing HOA documents', status: 'alert', description: 'HOA bylaws from 2023 are required.' },
      { id: 't4', title: 'Photos uploaded', status: 'completed' },
    ],
    threads: [
      { id: 'm1', title: 'Disclosures', lastMessage: 'I have signed the first three forms.', timestamp: '2h ago', category: 'Disclosures' },
      { id: 'm2', title: 'Questions', lastMessage: 'When is the staging company coming?', timestamp: '1d ago', category: 'Questions' },
    ],
    insights: [
      { id: 'i1', text: 'Listing is delayed due to missing disclosures', type: 'warning' },
      { id: 'i2', text: 'Seller hasn’t responded in 2 days', type: 'info' },
    ]
  },
  {
    id: '2',
    address: '4502 Pine Street, Austin, TX 78745',
    sellerName: 'Robert Wilson',
    stage: 'Active',
    currentStep: 'Reviewing offers',
    completedSteps: 12,
    totalSteps: 15,
    daysInStage: 5,
    listPrice: '$620,000',
    offersCount: 3,
    showingActivity: 14,
    timeline: 'Active for 7 days',
    tasks: [
      { id: 't5', title: 'Initial showings completed', status: 'completed' },
      { id: 't6', title: 'Offer deadline set', status: 'completed' },
      { id: 't7', title: 'Review 3 pending offers', status: 'pending' },
    ],
    threads: [
      { id: 'm3', title: 'Offers', lastMessage: 'The $635k offer looks very strong.', timestamp: '1h ago', category: 'Offers' },
    ],
    insights: [
      { id: 'i3', text: '3 buyers showed interest — follow up recommended', type: 'success' },
    ]
  },
  {
    id: '3',
    address: '882 Westview Terrace, Austin, TX 78703',
    sellerName: 'Elena Rodriguez',
    stage: 'Under Contract',
    currentStep: 'Inspection period',
    completedSteps: 18,
    totalSteps: 22,
    daysInStage: 4,
    listPrice: '$1,250,000',
    timeline: 'Closing scheduled for May 12',
    tasks: [
      { id: 't8', title: 'Earnest money received', status: 'completed' },
      { id: 't9', title: 'Inspection scheduled', status: 'completed' },
      { id: 't10', title: 'Appraisal ordered', status: 'pending' },
    ],
    threads: [
      { id: 'm4', title: 'Documents', lastMessage: 'Sent the signed contract to title.', timestamp: '4h ago', category: 'Documents' },
    ],
    insights: [
      { id: 'i4', text: 'Inspection report expected tomorrow', type: 'info' },
    ]
  },
  {
    id: '4',
    address: '2105 Barton Hills Dr, Austin, TX 78704',
    sellerName: 'David Chen',
    stage: 'Closing',
    currentStep: 'Final walkthrough',
    completedSteps: 24,
    totalSteps: 25,
    daysInStage: 1,
    listPrice: '$975,000',
    timeline: 'Closing tomorrow at 10 AM',
    tasks: [
      { id: 't11', title: 'Title commitment clear', status: 'completed' },
      { id: 't12', title: 'Final walkthrough scheduled', status: 'completed' },
      { id: 't13', title: 'Sign closing docs', status: 'pending' },
    ],
    threads: [
      { id: 'm5', title: 'Questions', lastMessage: 'Where do I drop the keys?', timestamp: '30m ago', category: 'Questions' },
    ],
    insights: [
      { id: 'i5', text: 'All documents verified for closing', type: 'success' },
    ]
  }
];
