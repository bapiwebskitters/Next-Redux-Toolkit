export interface Skill {
  id: number;
  name: string;
  percentage: number;
}

export interface SkillState {
  skills: Skill[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

