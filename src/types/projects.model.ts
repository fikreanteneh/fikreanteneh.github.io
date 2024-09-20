export interface ProjectModel {
    Icon: string;
    Name: string;
    Completed: boolean;
    Bullets: string[];
    Picture: string[];
    Achievements: {
        Description: string
        Icon: string
    }[];
    TechStack: {
        Stack: string;
        Icon: string;
    }[];
    Links: {
        Name: string;
        Icon: string;
        URL: string;
    }[];
}