export interface User {
    id: number;
    name: string;
    email: string;
    number: string;
    region: string;
    profession: string;
    emergencyContact: string;
    status: 'Red' | 'Green' | 'Yellow';
    gender: string;
    age: number;
  }