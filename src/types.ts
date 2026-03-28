export type DealStage = 'Pre-Listing' | 'Active' | 'Under Contract' | 'Closing';

export interface Task {
  id: string;
  title: string;
  status: 'completed' | 'pending' | 'alert';
  description?: string;
}

export interface MessageThread {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  category: 'Disclosures' | 'Documents' | 'Questions' | 'Offers';
}

export interface AIInsight {
  id: string;
  text: string;
  type: 'info' | 'warning' | 'success';
}

export interface Deal {
  id: string;
  address: string;
  sellerName: string;
  stage: DealStage;
  currentStep: string;
  completedSteps: number;
  totalSteps: number;
  daysInStage: number;
  listPrice: string;
  offersCount?: number;
  showingActivity?: number;
  timeline: string;
  tasks: Task[];
  threads: MessageThread[];
  insights: AIInsight[];
}
