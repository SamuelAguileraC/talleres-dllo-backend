import { readUsers as readUserAction, readUsersByHobby as readUsersByHobbyAction, userExists as userExistsAction, getTeamExperience as getTeamExperienceAction, getUsersByFaction as getUsersByFactionAction, createUser as createUserAction } from "./read.user.action";

// DECLARE CONTROLLER FUNCTIONS

// Controlador para obtener todos los usuarios
async function readUsers(): Promise<any[]> {
  const users = await readUserAction();
  return users;
}

// Controlador para obtener usuarios por hobby
async function readUsersByHobby(hobby: string): Promise<any[]> {
  const usersWithHobby = await readUsersByHobbyAction(hobby);
  return usersWithHobby;
}

// Controlador para verificar si un usuario existe por ID
async function userExists(id: number): Promise<boolean> {
  const exists = await userExistsAction(id);
  return exists;
}

// Controlador para obtener la experiencia total de un equipo
async function getTeamExperience(team: string): Promise<number> {
  const totalExperience = await getTeamExperienceAction(team);
  return totalExperience;
}

// Controlador para obtener usuarios por facción
async function getUsersByFaction(faction: string): Promise<any[]> {
  const usersInFaction = await getUsersByFactionAction(faction);
  return usersInFaction;
}

// Controlador para crear un nuevo usuario
async function createUser(newUser: any): Promise<string> {
  const message = await createUserAction(newUser);
  return message;
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, readUsersByHobby, userExists, getTeamExperience, getUsersByFaction, createUser };
