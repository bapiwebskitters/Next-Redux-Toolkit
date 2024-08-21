import { RootState } from "@/redux/store";

export const selectSkills = (state: RootState) => state.skill.skills;
export const selectSkillStatus = (state: RootState) => state.skill.status;
export const selectSkillError = (state: RootState) => state.skill.error;
