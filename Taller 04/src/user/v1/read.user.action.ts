const users = [
  {
    "id": 21,
    "name": "Captain Piett",
    "hobbies": ["singing", "walking", "guitar"],
    "years": 2,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 27,
    "name": "General Veers",
    "hobbies": ["swimming", "guitar"],
    "years": 12,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 32,
    "name": "Admiral Ozzel",
    "hobbies": ["walking", "swimming", "guitar"],
    "years": 7,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 41,
    "name": "Commander Jerjerrod",
    "hobbies": ["swimming", "singing"],
    "years": 3,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 10,
    "name": "Poe Dameron",
    "hobbies": ["walking", "singing"],
    "years": 14,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 2,
    "name": "Temmin 'Snap' Wexley",
    "hobbies": ["swimming", "drums"],
    "years": 30,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 44,
    "name": "Tallissan Lintra",
    "hobbies": ["walking", "walking"],
    "years": 16,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 99,
    "name": "Ello Asty",
    "hobbies": ["guitar", "singing"],
    "years": 2,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 3,
    "name": "Wedge Antilles",
    "hobbies": ["guitar", "walking"],
    "years": 22,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 8,
    "name": "Ciena Ree",
    "hobbies": ["guitar", "singing"],
    "years": 15,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 40,
    "name": "Iden Versio",
    "hobbies": ["drums", "walking"],
    "years": 37,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 66,
    "name": "Thane Kyrell",
    "hobbies": ["drums", "singing"],
    "years": 10,
    "team": "axvedw",
    "faction": "Rebels"
  }
]

async function readUsers(): Promise<any[]> {
  return users; 
}

// Leer usuarios por hobby
async function readUsersByHobby(hobby: string): Promise<any[]> {
  return users.filter(user => user.hobbies.includes(hobby));  // Filtrar usuarios por hobby
}

// Verificar si un usuario existe por ID
async function userExists(id: number): Promise<boolean> {
  return users.some(user => user.id === id);  // Verificar si algún usuario tiene el ID dado
}

// Obtener la experiencia total del equipo
async function getTeamExperience(team: string): Promise<number> {
  const teamMembers = users.filter(user => user.team === team);  // Filtrar los usuarios por equipo
  const totalExperience = teamMembers.reduce((total, user) => total + user.years, 0);  
  return totalExperience;
}

// Filtrar usuarios por facción
async function getUsersByFaction(faction: string): Promise<any[]> {
  return users.filter(user => user.faction === faction);  // Filtrar los usuarios por facción
}


/// UN POST PARA CREAR UN NUEVO USUARIO

// Crear un nuevo usuario
async function createUser(newUser: any): Promise<string> {
  const { id, name, hobbies, years, team, faction } = newUser;

  // Validar que los campos requeridos estén presentes
  if (!id || !name || !hobbies || !years || !team || !faction) {
    return "Missing required fields";
  }

  // Validar que el id sea único
  const existingUser = users.find(user => user.id === id);
  if (existingUser) {
    return "User with this ID already exists";
  }

  // Crear y agregar el nuevo usuario al array
  users.push(newUser);
  
  return "User created successfully";
}

// Exportar las funciones
export { readUsers, readUsersByHobby, userExists, getTeamExperience, getUsersByFaction, createUser };
