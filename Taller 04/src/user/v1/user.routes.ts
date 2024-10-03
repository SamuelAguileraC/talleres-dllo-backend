import { Router, Request, Response } from "express";
import { readUsers, readUsersByHobby, userExists, getTeamExperience, getUsersByFaction, createUser } from "./user.controller";



// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;
  if (!hobby) {
    return response.status(400).json({ message: "Hobby is required" });
  }

  const usersWithHobby = await readUsersByHobby(hobby);
  response.status(200).json({
    message: "Success.",
    users: usersWithHobby,
  });
}

async function CheckUserExists(request: Request, response: Response) {
  const userId = parseInt(request.query.id as string, 10);
  if (isNaN(userId)) {
    return response.status(400).json({ message: "Invalid ID format" });
  }

  const exists = await userExists(userId);

  response.status(200).json({
    message: "Success.",
    exists: exists,
  });
}

async function GetTeamExperience(request: Request, response: Response) {
  const team = request.query.team as string;
  if (!team) {
    return response.status(400).json({ message: "Team is required" });
  }

  const totalExperience = await getTeamExperience(team);

  response.status(200).json({
    message: "Success.",
    team: team,
    totalExperience: totalExperience,
  });
}

async function GetUsersByFaction(request: Request, response: Response) {
  const faction = request.query.faction as string;
  if (!faction) {
    return response.status(400).json({ message: "Faction is required" });
  }

  const usersInFaction = await getUsersByFaction(faction);
  response.status(200).json({
    message: "Success.",
    faction: faction,
    users: usersInFaction,
  });
}

async function RegisterUser(request: Request, response: Response) {
  const newUser = request.body;

  const message = await createUser(newUser);
  if (message === "User created successfully") {
    response.status(201).json({ message: message });
  } else {
    response.status(400).json({ message: message });
  }
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby);
userRoutes.get("/exists", CheckUserExists);
userRoutes.get("/team-experience", GetTeamExperience);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("/", RegisterUser);  

// EXPORT ROUTES
export default userRoutes;
