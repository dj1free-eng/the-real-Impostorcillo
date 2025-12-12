
  // ============================
  // script.js (Lógicamente separado)
  // ============================

  // ============================
  // CONSTANTES
  // ============================
  const APP_VERSION = "2.0.1";
  const RAPID_TIME_SECONDS = 120;
  const CLASSIC_TIME_SECONDS = 180;
  
  // Palabras expandidas por categoría (Añadí más complejidad para el modo experto)
  const WORDS_DATABASE = {
    comida: [
      {word: "Pizza", hint: "Italiana, redonda, con queso", difficulty: 1, examples: ["Pasta", "Lasaña", "Tiramisú"]},
      {word: "Sushi", hint: "Japonés, crudo, con arroz", difficulty: 2, examples: ["Maki", "Sashimi", "Wasabi"]},
      {word: "Hamburguesa", hint: "Entre dos panes", difficulty: 1, examples: ["Patatas Fritas", "Ketchup", "Pepinillos"]},
      {word: "Paella", hint: "Española, con arroz", difficulty: 2, examples: ["Azafrán", "Marisco", "Valencia"]},
      {word: "Tacos", hint: "Mexicanos, tortilla", difficulty: 1, examples: ["Guacamole", "Cebolla", "Chile"]},
      {word: "Croissant", hint: "Francés, hojaldre", difficulty: 2, examples: ["Mantequilla", "Panadería", "Desayuno"]},
      {word: "Pasta", hint: "Italiana, con salsa", difficulty: 1, examples: ["Espagueti", "Carbonara", "Fideos"]}
    ],
    animales: [
      {word: "León", hint: "Rey de la selva", difficulty: 1, examples: ["Garras", "Melena", "Sabana"]},
      {word: "Pingüino", hint: "Vive en el hielo", difficulty: 1, examples: ["Frío", "Antártida", "Aves no voladoras"]},
      {word: "Delfín", hint: "Mamífero marino inteligente", difficulty: 2, examples: ["Océano", "Ecolocalización", "Sonar"]},
      {word: "Ornitorrinco", hint: "Mamífero que pone huevos", difficulty: 3, examples: ["Australia", "Pico de pato", "Venenoso"]},
      {word: "Tigre", hint: "Felino rayado", difficulty: 1, examples: ["Bengala", "Selva", "Carnívoro"]},
      {word: "Koala", hint: "Australiano, come eucalipto", difficulty: 2, examples: ["Marsupial", "Dormilón", "Hojas"]},
      {word: "Cisne", hint: "Ave blanca y elegante", difficulty: 2, examples: ["Lago", "Cuello", "Migración"]}
    ],
    objetos: [
      {word: "Reloj", hint: "Marca el tiempo", difficulty: 1, examples: ["Muñeca", "Digital", "Alarma"]},
      {word: "Paraguas", hint: "Te protege de la lluvia", difficulty: 1, examples: ["Plegable", "Mango", "Toldo"]},
      {word: "Brújula", hint: "Indica el norte", difficulty: 2, examples: ["Imán", "Puntos cardinales", "Explorador"]},
      {word: "Lupa", hint: "Aumenta las cosas", difficulty: 2, examples: ["Vidrio", "Detective", "Fuego"]},
      {word: "Teléfono", hint: "Para comunicarse", difficulty: 1, examples: ["Llamada", "Móvil", "Fijo"]},
      {word: "Candado", hint: "Para asegurar cosas", difficulty: 2, examples: ["Metal", "Llave", "Combinación"]}
    ],
    sitios: [
      {word: "Biblioteca", hint: "Lugar de libros y silencio", difficulty: 1, examples: ["Estanterías", "Préstamo", "Estudiar"]},
      {word: "Museo", hint: "Exhibe arte e historia", difficulty: 1, examples: ["Cuadros", "Esculturas", "Visita guiada"]},
      {word: "Gimnasio", hint: "Para hacer ejercicio", difficulty: 1, examples: ["Pesas", "Cardio", "Entrenador"]},
      {word: "Observatorio", hint: "Para ver las estrellas", difficulty: 3, examples: ["Telescopio", "Planetas", "Noche"]},
      {word: "Mercado", hint: "Compras y puestos", difficulty: 1, examples: ["Fruta", "Regatear", "Fresco"]},
      {word: "Teatro", hint: "Donde se ven obras", difficulty: 2, examples: ["Escenario", "Actores", "Butacas"]}
    ],
    deportes: [
      {word: "Fútbol", hint: "Con un balón redondo", difficulty: 1, examples: ["Portería", "Delantero", "Liga"]},
      {word: "Tenis", hint: "Con raqueta y red", difficulty: 1, examples: ["Pista", "Saque", "Roland Garros"]},
      {word: "Natación", hint: "En la piscina", difficulty: 1, examples: ["Agua", "Estilo libre", "Olimpiadas"]},
      {word: "Esgrima", hint: "Con espadas", difficulty: 3, examples: ["Florete", "Máscara", "Duelo"]},
      {word: "Boxeo", hint: "Con guantes, en un ring", difficulty: 2, examples: ["Nocaut", "Round", "Pegar"]},
      {word: "Golf", hint: "Se usa un palo y una bola pequeña", difficulty: 2, examples: ["Hoyo", "Green", "Tee"]}
    ],
    videojuegos: [
      {word: "Mario", hint: "Fontanero italiano", difficulty: 1, examples: ["Nintendo", "Princesa", "Setas"]},
      {word: "Minecraft", hint: "Construyes con blocos", difficulty: 1, examples: ["Píxeles", "Creación", "Sobrevivencia"]},
      {word: "Fortnite", hint: "Battle royale popular", difficulty: 1, examples: ["Pico", "Bailes", "Isla"]},
      {word: "Zelda", hint: "Aventura con Link", difficulty: 2, examples: ["Hyrule", "Espada", "Trifuerza"]},
      {word: "Pokémon", hint: "Atrapa criaturas", difficulty: 1, examples: ["Pikachu", "Entrenador", "Pokebola"]},
      {word: "Tetris", hint: "Cae por bloques", difficulty: 2, examples: ["Ruso", "Puzle", "Lineas"]}
    ],
    transportes: [
      {word: "Avión", hint: "Vuela por el cielo", difficulty: 1, examples: ["Aeropuerto", "Piloto", "Azafata"]},
      {word: "Bicicleta", hint: "Dos ruedas, pedales", difficulty: 1, examples: ["Casco", "Cadena", "Paseo"]},
      {word: "Submarino", hint: "Viaja bajo el agua", difficulty: 2, examples: ["Periscopio", "Marina", "Profundidad"]},
      {word: "Helicóptero", hint: "Vuela con hélices", difficulty: 2, examples: ["Rotor", "Rescate", "Vertical"]},
      {word: "Tren", hint: "Va sobre rieles", difficulty: 1, examples: ["Vagón", "Estación", "Máquina de vapor"]},
      {word: "Moto", hint: "Vehículo de dos ruedas y motor", difficulty: 1, examples: ["Velocidad", "Casco", "Carretera"]}
    ],
    peliculas: [
      {word: "Titanic", hint: "Barco que se hunde", difficulty: 1, examples: ["Jack", "Rose", "Hielo"]},
      {word: "Matrix", hint: "Realidad virtual", difficulty: 2, examples: ["Neo", "Píldora", "Elegido"]},
      {word: "Avatar", hint: "Planeta Pandora", difficulty: 1, examples: ["Azul", "3D", "Bosque"]},
      {word: "Inception", hint: "Sueños dentro de sueños", difficulty: 3, examples: ["Tótem", "Ladrón", "Gravedad"]},
      {word: "Star Wars", hint: "Saga espacial", difficulty: 1, examples: ["Jedi", "Sable de luz", "Fuerza"]},
      {word: "E.T.", hint: "Extraterrestre amigable", difficulty: 2, examples: ["Bicicleta", "Dedo", "Teléfono"]}
    ],
    profesiones: [
      {word: "Médico", hint: "Cura enfermos", difficulty: 1, examples: ["Hospital", "Estetoscopio", "Receta"]},
      {word: "Chef", hint: "Cocina profesional", difficulty: 1, examples: ["Restaurante", "Recetas", "Cuchillo"]},
      {word: "Piloto", hint: "Conduce aviones", difficulty: 1, examples: ["Cabina", "Vuelo", "Azafata"]},
      {word: "Astronauta", hint: "Viaja al espacio", difficulty: 2, examples: ["NASA", "Gravedad cero", "Cohete"]},
      {word: "Detective", hint: "Resuelve crímenes", difficulty: 2, examples: ["Lupa", "Pistas", "Interrogatorio"]},
      {word: "Bombero", hint: "Apaga incendios", difficulty: 1, examples: ["Manguera", "Fuego", "Rescate"]}
    ],
    paises: [
      {word: "Japón", hint: "País del sol naciente", difficulty: 1, examples: ["Tokio", "Kimono", "Manga"]},
      {word: "Brasil", hint: "Carnaval y fútbol", difficulty: 1, examples: ["Samba", "Río de Janeiro", "Selva"]},
      {word: "Egipto", hint: "Pirámides y faraones", difficulty: 1, examples: ["Nilo", "Desierto", "Momia"]},
      {word: "Islandia", hint: "Isla nórdica", difficulty: 2, examples: ["Volcán", "Hielo", "Aurora boreal"]},
      {word: "Australia", hint: "Continente-isla", difficulty: 1, examples: ["Canguro", "Sídney", "Koala"]},
      {word: "Italia", hint: "Con forma de bota", difficulty: 1, examples: ["Roma", "Coliseo", "Pizza"]}
    ]
  };

  const EMOJI_AVATARS = ["😀", "😎", "🤓", "😇", "🤠", "🥳", "🤖", "👽", "🦊", "🐯"];

// ============================
// VARIABLES DE SONIDO
// ============================
let soundElements = {}; // Ahora es una variable vacía

  // Estado del juego
  const gameState = {
    mode: 'classic',
    numPlayers: 3,
    currentPlayer: 1,
    selectedCategory: "aleatorio",
    secretWord: "",
    secretHint: "",
    secretDifficulty: 1,
    impostorIndex: 1,
    impostorIndex2: -1, // Para modo Mr. White
    roleShown: false,
    playerNames: [],
    playerAvatars: [],
    ordenRonda: [],
    starterPlayer: 1,
    votes: {},
    eliminated: [],
    currentVoterIndex: 1, // Nuevo: el índice del jugador que está votando actualmente
    timerEnabled: true,
    timerSeconds: CLASSIC_TIME_SECONDS,
    timerInterval: null,
    timerPaused: false,
    soundEnabled: true,
    darkMode: false
  };

  // Estadísticas
  let stats = {
    totalGames: 0,
    citizenWins: 0,
    impostorWins: 0,
    wordsPlayed: {}
  };

  // Decks de palabras
  let decksByCategory = {};

  // ============================
  // INICIALIZACIÓN
  // ============================

function setupAudioElements() {
  soundElements = {
      click: new Audio('click.mp3'),
      success: new Audio('success.mp3'),
      error: new Audio('error.mp3')
  };
  // Puedes precargar el audio aquí si quieres, aunque new Audio() lo hace a menudo.
  // soundElements.click.load();
}


function initGame() {
  // LLAMADA NUEVA AQUÍ
  setupAudioElements(); 
  // FIN LLAMADA NUEVA

    loadStats();
    loadPreferences();
    const toggleRoleBtn = document.getElementById("toggleRoleBtn");
  if (toggleRoleBtn) {
    // Ocultar el botón si es táctil (se usa el gesto de deslizar)
    toggleRoleBtn.style.display = isTouch ? "none" : "block";
  }

    initializeDecks();
    refreshPlayerNameInputs();
    showScreen("screen-start");
    
    if (gameState.darkMode) {
      document.body.classList.add('dark-mode');
    }
    
    updateSoundButton();
  }

  function initializeDecks() {
    Object.keys(WORDS_DATABASE).forEach(cat => {
      decksByCategory[cat] = [...WORDS_DATABASE[cat]];
      shuffle(decksByCategory[cat]);
    });

    decksByCategory.all = Object.values(WORDS_DATABASE).flat();
    shuffle(decksByCategory.all);
  }

  function loadStats() {
    const saved = localStorage.getItem('impostorcillo-stats');
    if (saved) {
      try {
        stats = JSON.parse(saved);
      } catch (e) {
        console.error('Error loading stats:', e);
      }
    }
  }

  function saveStats() {
    localStorage.setItem('impostorcillo-stats', JSON.stringify(stats));
  }

  function loadPreferences() {
    const darkMode = localStorage.getItem('impostorcillo-darkMode');
    const soundEnabled = localStorage.getItem('impostorcillo-sound');
    
    if (darkMode === 'true') {
      gameState.darkMode = true;
    }
    
    if (soundEnabled === 'false') {
      gameState.soundEnabled = false;
    }
  }

  function savePreferences() {
    localStorage.setItem('impostorcillo-darkMode', gameState.darkMode);
    localStorage.setItem('impostorcillo-sound', gameState.soundEnabled);
  }

  // ============================
  // UTILIDADES
  // ============================
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Función para obtener ejemplos de la categoría (Mejora modo experto)
  function getCategoryExamples(categoryKey) {
    const deck = WORDS_DATABASE[categoryKey];
    if (!deck) return [];

    let allExamples = deck.flatMap(card => card.examples || []);
    // Eliminar duplicados y el propio nombre de la categoría si aparece
    allExamples = [...new Set(allExamples)].filter(e => e.toLowerCase() !== categoryKey.toLowerCase());
    shuffle(allExamples);
    // Tomar 3 ejemplos
    return allExamples.slice(0, 3).join(', ');
  }

function playSound(type) {
  if (!gameState.soundEnabled) return;

  const audioEl = soundElements[type];
  
  if (audioEl) {
    // 1. Detener si ya está sonando (para que los clicks sean instantáneos)
    audioEl.pause(); 
    // 2. Volver al inicio
    audioEl.currentTime = 0; 
    
    // Opcional: Ajustar volumen si es necesario
    if (type === 'click') {
        audioEl.volume = 0.6; // Clicks un poco más bajos
    } else {
        audioEl.volume = 1.0;
    }
    
    // 3. Reproducir, capturando cualquier error de reproducción automática
    audioEl.play().catch(e => {
        console.warn("No se pudo reproducir el sonido (posiblemente por políticas de AutoPlay del navegador):", e);
    });
  }
}

  function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#10b981'];
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
      }, i * 30);
    }
  }

  // ============================
  // NAVEGACIÓN
  // ============================
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
    playSound('click');
  }

  function backToStart() {
    stopTimer();
    showScreen("screen-start");
  }

  function goToSetup() {
    showScreen("screen-setup");
  }

  // ============================
  // CONFIGURACIÓN
  // ============================
  function selectMode(mode) {
    gameState.mode = mode;
    document.querySelectorAll('.mode-card').forEach(card => {
      card.classList.remove('selected');
      if (card.dataset.mode === mode) {
        card.classList.add('selected');
      }
    });
    playSound('click');
  }

  function refreshPlayerNameInputs() {
    const numSel = document.getElementById("selectPlayers");
    const container = document.getElementById("playerNamesContainer");
    const n = parseInt(numSel.value, 10);

    container.innerHTML = "";
    gameState.playerAvatars = gameState.playerAvatars || [];

    for (let i = 1; i <= n; i++) {
      const row = document.createElement("div");
      row.className = "player-row";

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Jugador ${i}`;
      input.id = `playerName${i}`;

      const idxArr = i - 1;
      if (!gameState.playerAvatars[idxArr]) {
        gameState.playerAvatars[idxArr] = EMOJI_AVATARS[idxArr % EMOJI_AVATARS.length];
      }
      const avatar = gameState.playerAvatars[idxArr];

      const avatarDiv = document.createElement("div");
      avatarDiv.className = "avatar-thumb";
      avatarDiv.textContent = avatar;
      avatarDiv.dataset.playerIndex = idxArr;

      avatarDiv.addEventListener("click", () => {
        cycleAvatar(idxArr, avatarDiv);
      });

      // Rellenar con nombre guardado si existe (mejora de UX)
      if (gameState.playerNames[idxArr]) {
        input.value = gameState.playerNames[idxArr];
      }

      row.appendChild(input);
      row.appendChild(avatarDiv);
      container.appendChild(row);
    }
    // Actualizar el estado con el nuevo número de jugadores
    gameState.numPlayers = n;
  }

  function cycleAvatar(playerIdx, element) {
    const currentIdx = EMOJI_AVATARS.indexOf(gameState.playerAvatars[playerIdx]);
    const nextIdx = (currentIdx + 1) % EMOJI_AVATARS.length;
    gameState.playerAvatars[playerIdx] = EMOJI_AVATARS[nextIdx];
    element.textContent = EMOJI_AVATARS[nextIdx];
    playSound('click');
  }

  function drawWord(categoryKey) {
    const deckKey = categoryKey === "aleatorio" ? "all" : categoryKey;

    if (!decksByCategory[deckKey] || decksByCategory[deckKey].length === 0) {
      if (deckKey === "all") {
        decksByCategory.all = Object.values(WORDS_DATABASE).flat();
        shuffle(decksByCategory.all);
      } else {
        decksByCategory[deckKey] = [...WORDS_DATABASE[deckKey]];
        shuffle(decksByCategory[deckKey]);
      }
    }

    const deck = decksByCategory[deckKey];
    // Usar pop para sacar el último (más eficiente) si el array ya está barajado
    return deck.pop() || deck[0]; 
  }

  // ============================
  // INICIO DE PARTIDA
  // ============================
  function startGame() {
    const numSel = document.getElementById("selectPlayers");
    const catSel = document.getElementById("selectCategory");
    const timerCheck = document.getElementById("timerEnabled");

    gameState.numPlayers = parseInt(numSel.value, 10);
    gameState.selectedCategory = catSel.value;
    gameState.timerEnabled = timerCheck.checked;

    gameState.playerNames = [];
    for (let i = 1; i <= gameState.numPlayers; i++) {
      const input = document.getElementById(`playerName${i}`);
      // Validación: Si el input está vacío, usar el nombre por defecto
      const name = (input && input.value.trim()) || `Jugador ${i}`;
      gameState.playerNames.push(name);
    }

    const card = drawWord(gameState.selectedCategory);
    gameState.secretWord = card.word;
    gameState.secretHint = card.hint || "";
    gameState.secretDifficulty = card.difficulty || 1;
    gameState.secretExamples = card.examples;

    // Asignar impostores según modo
    const indices = [];
    for (let i = 1; i <= gameState.numPlayers; i++) indices.push(i);
    shuffle(indices);

    if (gameState.mode === 'mrwhite') {
      gameState.impostorIndex = indices[0];
      gameState.impostorIndex2 = indices[1];
    } else {
      gameState.impostorIndex = indices[0];
      gameState.impostorIndex2 = -1;
    }

    gameState.starterPlayer = Math.floor(Math.random() * gameState.numPlayers) + 1;

    gameState.ordenRonda = [];
    for (let i = 1; i <= gameState.numPlayers; i++) {
      gameState.ordenRonda.push(i);
    }
    shuffle(gameState.ordenRonda);

    gameState.currentPlayer = 1;
    gameState.votes = {};
    gameState.eliminated = [];
    gameState.currentVoterIndex = 1;

    // Timer
    gameState.timerSeconds = gameState.mode === 'rapid' ? RAPID_TIME_SECONDS : CLASSIC_TIME_SECONDS;

    prepareCurrentPlayerScreen();
    showScreen("screen-role");
    playSound('success');
  }

  function startAnotherRound() {
    // Mantener jugadores y modo, solo cambiar palabra y roles
    const card = drawWord(gameState.selectedCategory);
    gameState.secretWord = card.word;
    gameState.secretHint = card.hint || "";
    gameState.secretDifficulty = card.difficulty || 1;
    gameState.secretExamples = card.examples;

    const indices = [];
    for (let i = 1; i <= gameState.numPlayers; i++) indices.push(i);
    shuffle(indices);

    if (gameState.mode === 'mrwhite') {
      gameState.impostorIndex = indices[0];
      gameState.impostorIndex2 = indices[1];
    } else {
      gameState.impostorIndex = indices[0];
      gameState.impostorIndex2 = -1;
    }

    gameState.starterPlayer = Math.floor(Math.random() * gameState.numPlayers) + 1;

    gameState.ordenRonda = [];
    for (let i = 1; i <= gameState.numPlayers; i++) {
      gameState.ordenRonda.push(i);
    }
    shuffle(gameState.ordenRonda);

    gameState.currentPlayer = 1;
    gameState.votes = {};
    gameState.eliminated = [];
    gameState.currentVoterIndex = 1;

    gameState.timerSeconds = gameState.mode === 'rapid' ? RAPID_TIME_SECONDS : CLASSIC_TIME_SECONDS;

    prepareCurrentPlayerScreen();
    showScreen("screen-role");
  }

  // ============================
  // PANTALLA DE ROL
  // ============================
  const cardFrontEl = document.getElementById("cardFront");
  const nextBtnEl = document.getElementById("nextPlayerBtn");

  function prepareCurrentPlayerScreen() {
    const orderBadge = document.getElementById("playerOrder");
    const roleTitle = document.getElementById("roleTitle");
    const roleWord = document.getElementById("roleWord");
    const roleTip = document.getElementById("roleTip");

    const turnIndex = gameState.currentPlayer;
    const realPlayer = gameState.ordenRonda[turnIndex - 1];
    const idx = realPlayer - 1;

    const isImpostor = realPlayer === gameState.impostorIndex || realPlayer === gameState.impostorIndex2;
    const name = gameState.playerNames[idx] || `Jugador ${realPlayer}`;

    const bigNameEl = document.getElementById("playerNameBig");
    if (bigNameEl) {
      bigNameEl.textContent = name;
    }

    const avatar = gameState.playerAvatars[idx] || EMOJI_AVATARS[idx % EMOJI_AVATARS.length];
    
    const frontAvatarEl = document.getElementById("frontAvatar");
    const backAvatarEl = document.getElementById("backAvatar");
    if (frontAvatarEl) frontAvatarEl.textContent = avatar;
    if (backAvatarEl) backAvatarEl.textContent = avatar;

    if (orderBadge) {
      orderBadge.textContent = `${turnIndex} de ${gameState.numPlayers}`;
    }

    // Lógica para el impostor
    if (isImpostor) {
      if (gameState.mode === 'expert') {
        const categoryKey = gameState.selectedCategory === "aleatorio" 
          ? Object.keys(WORDS_DATABASE)[Math.floor(Math.random() * Object.keys(WORDS_DATABASE).length)]
          : gameState.selectedCategory;
          
        const examples = getCategoryExamples(categoryKey);

        roleTitle.textContent = "Impostorcillo (Experto)";
        roleWord.textContent = `Categoría: ${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}`;
        roleTip.innerHTML = `No conoces la palabra. Debes fingir que la conoces.<br>
          <div class="impostor-examples">Ejemplos de la categoría: ${examples}</div>`;
      } else {
        roleTitle.textContent = realPlayer === gameState.impostorIndex2 ? "Mr. White" : "Impostorcillo";
        roleWord.textContent = "???";
        roleTip.textContent = "No conoces la palabra secreta. Escucha y finge normalidad.";
      }
    } else {
      // Lógica para el ciudadano
      roleTitle.textContent = "Ciudadano";
      roleWord.textContent = `"${gameState.secretWord}"`;
      
      const difficultyLabels = ["Fácil", "Media", "Difícil"];
      const difficultyClasses = ["difficulty-easy", "difficulty-medium", "difficulty-hard"];
      const diffLabel = difficultyLabels[gameState.secretDifficulty - 1];
      const diffClass = difficultyClasses[gameState.secretDifficulty - 1];
      
      roleTip.innerHTML = `${gameState.secretHint || "Da pistas sin decir la palabra directamente."}<br>
        <span class="difficulty-badge ${diffClass}">${diffLabel}</span>`;
    }

    gameState.roleShown = false;
    nextBtnEl.classList.add("hidden");
    nextBtnEl.classList.remove("active");

    cardFrontEl.style.transform = "translateY(0)";
    cardLiftedByButton = false;
    if (toggleRoleBtn) toggleRoleBtn.textContent = "Mostrar rol";
  }

  if (toggleRoleBtn) {
    toggleRoleBtn.addEventListener("click", toggleCardLift);
  }

  function toggleCardLift() {
    const slider = cardFrontEl.parentElement;
    const h = slider.offsetHeight || 300;

    if (!cardLiftedByButton) {
      cardFrontEl.style.transition = "transform 0.25s ease";
      cardFrontEl.style.transform = `translateY(${-h * 0.7}px)`;

      setTimeout(() => {
        cardFrontEl.style.transition = "";
      }, 260);

      if (!gameState.roleShown) {
        gameState.roleShown = true;
        nextBtnEl.classList.remove("hidden");
        nextBtnEl.classList.add("active");
      }

      toggleRoleBtn.textContent = "Ocultar rol";
      cardLiftedByButton = true;
      playSound('success');
    } else {
      cardFrontEl.style.transition = "transform 0.25s ease";
      cardFrontEl.style.transform = "translateY(0)";

      setTimeout(() => {
        cardFrontEl.style.transition = "";
      }, 260);

      toggleRoleBtn.textContent = "Mostrar rol";
      cardLiftedByButton = false;
    }
  }

  function nextPlayer() {
    nextBtnEl.classList.remove("active");
    nextBtnEl.classList.add("hidden");

    gameState.currentPlayer++;

    if (gameState.currentPlayer > gameState.numPlayers) {
      const starterIndex = gameState.starterPlayer || 1;
      const starterName = gameState.playerNames[starterIndex - 1] || `Jugador ${starterIndex}`;
      const starterEl = document.getElementById("starterInfo");
      if (starterEl) {
        starterEl.textContent = `Empieza diciendo su pista: ${starterName}`;
      }

      const timerContainer = document.getElementById('timerContainer');
      if (gameState.timerEnabled) {
        timerContainer.style.display = 'block';
        startTimer();
      } else {
        timerContainer.style.display = 'none';
      }

      showScreen("screen-debate");
      return;
    }

    prepareCurrentPlayerScreen();
    showScreen("screen-role");
  }

  // Touch events para carta
  let dragStartY = 0;
  let dragging = false;
  let cardHeight = 0;

  function onTouchStart(e) {
    // Solo permitir deslizar si el botón de alternar está oculto (modo táctil)
    if (toggleRoleBtn && toggleRoleBtn.style.display !== "none") return;
    
    const slider = cardFrontEl.parentElement;
    cardHeight = slider.offsetHeight || 300;
    dragStartY = e.touches[0].clientY;
    dragging = true;
    cardFrontEl.style.transition = "none";
    cardLiftedByButton = false;
  }

  function onTouchMove(e) {
    if (!dragging) return;

    const currentY = e.touches[0].clientY;
    let delta = currentY - dragStartY;

    if (delta > 0) delta = 0;
    if (delta < -cardHeight) delta = -cardHeight;

    cardFrontEl.style.transform = `translateY(${delta}px)`;

    if (delta < -cardHeight / 3 && !gameState.roleShown) {
      gameState.roleShown = true;
      nextBtnEl.classList.remove("hidden");
      nextBtnEl.classList.add("active");
    }
  }

  function onTouchEnd() {
    if (!dragging) return;
    dragging = false;

    cardFrontEl.style.transition = "transform 0.25s ease";
    
    // Si la tarjeta no se levantó lo suficiente, vuelve a bajar
    const currentY = parseFloat(cardFrontEl.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
    if (currentY > -cardHeight / 3) {
      cardFrontEl.style.transform = "translateY(0)";
    } else {
      // Si se levantó, déjala arriba (para que se mantenga el rol visible)
      cardFrontEl.style.transform = `translateY(${-cardHeight * 0.7}px)`;
    }

    setTimeout(() => {
      cardFrontEl.style.transition = "";
    }, 250);
  }
  
  // Solo añadir listeners de touch si no hay botón de toggle (o sea, es táctil)
  if (isTouch) {
    cardFrontEl.addEventListener("touchstart", onTouchStart, { passive: true });
    cardFrontEl.addEventListener("touchmove", onTouchMove, { passive: true });
    cardFrontEl.addEventListener("touchend", onTouchEnd);
  }

  // ============================
  // TEMPORIZADOR
  // ============================
  function startTimer() {
    stopTimer();
    gameState.timerPaused = false;
    document.getElementById('timerDisplay').classList.remove('warning');
    updateTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
      if (!gameState.timerPaused) {
        gameState.timerSeconds--;
        updateTimerDisplay();
        
        if (gameState.timerSeconds <= 10) {
          document.getElementById('timerDisplay').classList.add('warning');
          if (gameState.timerSeconds <= 5 && gameState.timerSeconds > 0) {
            playSound('error');
          }
        }
        
        if (gameState.timerSeconds <= 0) {
          stopTimer();
          playSound('error');
          alert('⏰ ¡Tiempo agotado! Pasad a la votación.');
        }
      }
    }, 1000);
  }

  function stopTimer() {
    if (gameState.timerInterval) {
      clearInterval(gameState.timerInterval);
      gameState.timerInterval = null;
    }
  }

  function pauseTimer() {
    gameState.timerPaused = !gameState.timerPaused;
    const btn = event.target;
    btn.textContent = gameState.timerPaused ? '▶️ Reanudar' : '⏸️ Pausar';
    playSound('click');
  }

  function resetTimer() {
    gameState.timerSeconds = gameState.mode === 'rapid' ? RAPID_TIME_SECONDS : CLASSIC_TIME_SECONDS;
    updateTimerDisplay();
    document.getElementById('timerDisplay').classList.remove('warning');
    playSound('click');
  }

  function addTime() {
    gameState.timerSeconds += 60;
    updateTimerDisplay();
    document.getElementById('timerDisplay').classList.remove('warning');
    playSound('success');
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timerSeconds / 60);
    const seconds = gameState.timerSeconds % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = display;
  }

  // ============================
  // VOTACIÓN (FLUJO MEJORADO)
  // ============================
  function startVoting() {
    stopTimer();
    gameState.votes = {};
    gameState.currentVoterIndex = 1; // Primer votante
    
    // Obtener la lista de jugadores activos (no eliminados)
    const activePlayers = gameState.playerNames
      .map((name, index) => ({ id: index + 1, name: name, avatar: gameState.playerAvatars[index] }))
      .filter(p => !gameState.eliminated.includes(p.id));
      
    if (activePlayers.length < 2) {
      alert("No hay suficientes jugadores activos para votar.");
      backToStart();
      return;
    }

    prepareVotingScreen();
    showScreen('screen-voting');
    playSound('success');
  }

  function prepareVotingScreen() {
    const grid = document.getElementById('votingGrid');
    grid.innerHTML = '';
    
    // El jugador que vota es el que está en el índice currentVoterIndex - 1
    const currentVoterId = gameState.ordenRonda.find(id => !gameState.eliminated.includes(id) && !gameState.votes[id]);
    
    if (!currentVoterId) {
        // Todos han votado
        document.getElementById('votingInstruction').textContent = '¡Todos han votado!';
        document.getElementById('revealVotesBtn').style.display = 'block';
        return;
    }
    
    const currentVoterName = gameState.playerNames[currentVoterId - 1];
    document.getElementById('votingInstruction').innerHTML = `**${currentVoterName}**: ¿A quién vas a votar?`;
    document.getElementById('revealVotesBtn').style.display = 'none';

    for (let i = 1; i <= gameState.numPlayers; i++) {
      const card = document.createElement('div');
      card.className = 'vote-card';
      card.dataset.playerId = i;

      const isEliminated = gameState.eliminated.includes(i);
      const isCurrentVoter = i === currentVoterId;
      
      if (isEliminated) card.classList.add('eliminated');
      if (isCurrentVoter) card.classList.add('voter-card'); // Jugador que está votando (no se puede votar a sí mismo)
      
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.textContent = gameState.playerAvatars[i - 1] || EMOJI_AVATARS[(i - 1) % EMOJI_AVATARS.length];
      
      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = gameState.playerNames[i - 1] || `Jugador ${i}`;
      
      const voteCount = document.createElement('div');
      voteCount.className = 'vote-count';
      voteCount.textContent = '0 votos';
      voteCount.id = `vote-count-${i}`;
      
      card.appendChild(emoji);
      card.appendChild(name);
      card.appendChild(voteCount);
      
      // Solo se puede votar si NO es el jugador eliminado y NO es el jugador que está votando
      if (!isEliminated && !isCurrentVoter) {
          card.addEventListener('click', () => recordVote(currentVoterId, i));
      }
      
      grid.appendChild(card);
    }
    
    updateVoteDisplay();
    updateVoteStatus();
  }

  function recordVote(voterId, targetId) {
    if (gameState.eliminated.includes(voterId) || voterId === targetId) return;
    
    // Registrar el voto
    gameState.votes[voterId] = targetId;
    
    // Pasar al siguiente votante activo
    const nextVoterId = gameState.ordenRonda.find(id => !gameState.eliminated.includes(id) && !gameState.votes[id]);

    if (nextVoterId) {
        // Reiniciar la pantalla de votación para el siguiente jugador
        prepareVotingScreen();
    } else {
        // Todos votaron
        document.getElementById('votingInstruction').textContent = '¡Todos han votado!';
        document.getElementById('revealVotesBtn').style.display = 'block';
    }
    
    updateVoteDisplay();
    updateVoteStatus();
    playSound('click');
  }

  function updateVoteDisplay() {
    const voteCounts = {};
    
    // Contar votos
    Object.values(gameState.votes).forEach(playerId => {
      voteCounts[playerId] = (voteCounts[playerId] || 0) + 1;
    });
    
    // Actualizar UI
    document.querySelectorAll('.vote-card').forEach(card => {
      const playerId = parseInt(card.dataset.playerId);
      const count = voteCounts[playerId] || 0;
      
      const countEl = document.getElementById(`vote-count-${playerId}`);
      if (countEl) {
        countEl.textContent = `${count} ${count === 1 ? 'voto' : 'votos'}`;
      }
      
      // Quitar clase voted a todos y sólo añadirla al jugador votado si tiene votos.
      card.classList.remove('voted'); 
      if (count > 0 && !card.classList.contains('voter-card')) {
        card.classList.add('voted');
      }
    });
  }

  function updateVoteStatus() {
    const totalVotes = Object.keys(gameState.votes).length;
    const activePlayers = gameState.numPlayers - gameState.eliminated.length;
    
    document.getElementById('voteStatus').textContent = 
      `${totalVotes} de ${activePlayers} votos emitidos`;
  }

  function revealVotes() {
    const voteCounts = {};
    
    Object.values(gameState.votes).forEach(playerId => {
      voteCounts[playerId] = (voteCounts[playerId] || 0) + 1;
    });
    
    // Encontrar al más votado
    let maxVotes = 0;
    let eliminatedPlayer = null;
    const tied = [];
    
    Object.keys(voteCounts).forEach(playerIdStr => {
      const playerId = parseInt(playerIdStr);
      const count = voteCounts[playerIdStr];

      // Ignorar a los que ya están eliminados
      if (gameState.eliminated.includes(playerId)) return;
      
      if (count > maxVotes) {
        maxVotes = count;
        eliminatedPlayer = playerId;
        tied.length = 0;
        tied.push(eliminatedPlayer);
      } else if (count === maxVotes) {
        tied.push(playerId);
      }
    });

    // Si nadie votó o solo quedan eliminados (situación improbable), manejar.
    if (eliminatedPlayer === null) {
        alert("Nadie ha sido votado o hay un error. El juego termina sin eliminación.");
        showReveal();
        return;
    }
    
    // Manejar empates
    if (tied.length > 1) {
      // Filtrar el eliminado al azar solo si no es un eliminado previo
      const candidates = tied.filter(id => !gameState.eliminated.includes(id));
      if (candidates.length > 0) {
        eliminatedPlayer = candidates[Math.floor(Math.random() * candidates.length)];
      } else {
         // Si el empate es entre eliminados (muy raro), se elige al azar entre ellos
         eliminatedPlayer = tied[Math.floor(Math.random() * tied.length)];
      }
    }

    // Si el eliminado ya estaba en la lista, no hacemos nada más que mostrar
    if (!gameState.eliminated.includes(eliminatedPlayer)) {
        gameState.eliminated.push(eliminatedPlayer);
    }
    
    // Mostrar resultados
    const resultEmoji = document.getElementById('voteResultEmoji');
    const resultText = document.getElementById('voteResultText');
    const resultDetail = document.getElementById('voteResultDetail');
    const breakdown = document.getElementById('voteBreakdown');
    
    const eliminatedName = gameState.playerNames[eliminatedPlayer - 1] || `Jugador ${eliminatedPlayer}`;
    
    if (tied.length > 1) {
      resultEmoji.textContent = '🎲';
      resultText.textContent = '¡Empate!';
      resultDetail.textContent = `Hubo empate entre varios. Por sorteo, **${eliminatedName}** fue eliminado.`;
    } else {
      resultEmoji.textContent = '🎯';
      resultText.textContent = 'Votación completada';
      resultDetail.textContent = `**${eliminatedName}** ha sido eliminado con ${maxVotes} ${maxVotes === 1 ? 'voto' : 'votos'}.`;
    }
    
    // Mostrar desglose (solo para jugadores que recibieron votos)
    breakdown.innerHTML = '<h3 style="margin-top: 20px;">Desglose de votos:</h3>';
    Object.keys(voteCounts).forEach(playerIdStr => {
      const playerId = parseInt(playerIdStr);
      const name = gameState.playerNames[playerId - 1] || `Jugador ${playerId}`;
      const count = voteCounts[playerIdStr];
      const p = document.createElement('p');
      p.textContent = `${name}: ${count} ${count === 1 ? 'voto' : 'votos'}`;
      breakdown.appendChild(p);
    });
    
    showScreen('screen-vote-results');
    playSound('success');
  }

  function showReveal() {
    prepareRevealScreen();
    showScreen('screen-reveal');
  }

  // ============================
  // REVELACIÓN
  // ============================
  function prepareRevealScreen() {
    document.getElementById("finalWord").textContent = gameState.secretWord;

    const impostorName = gameState.playerNames[gameState.impostorIndex - 1] || `Jugador ${gameState.impostorIndex}`;
    
    let impostorText = impostorName;
    let impostorIds = [gameState.impostorIndex];

    if (gameState.impostorIndex2 > 0) {
      const impostor2Name = gameState.playerNames[gameState.impostorIndex2 - 1] || `Jugador ${gameState.impostorIndex2}`;
      impostorText = `${impostorName} y ${impostor2Name}`;
      impostorIds.push(gameState.impostorIndex2);
    }
    
    document.getElementById("impostorPlayer").textContent = impostorText;
    
    // Determinar resultado: Ciudadanos ganan si AL MENOS UN impostor fue eliminado
    const citizensWon = impostorIds.some(id => gameState.eliminated.includes(id));
    
    const resultEmoji = document.getElementById('finalResultEmoji');
    const resultText = document.getElementById('finalResultText');
    
    if (citizensWon) {
      resultEmoji.textContent = '🎉';
      resultText.textContent = '¡Ciudadanos ganan!';
      createConfetti();
      stats.citizenWins++;
      playSound('success');
    } else {
      resultEmoji.textContent = '😈';
      resultText.textContent = '¡El impostor gana!';
      stats.impostorWins++;
      playSound('error');
    }
    
    stats.totalGames++;
    
    // Registrar palabra jugada
    if (!stats.wordsPlayed[gameState.secretWord]) {
      stats.wordsPlayed[gameState.secretWord] = 0;
    }
    stats.wordsPlayed[gameState.secretWord]++;
    
    saveStats();
  }

  // ============================
  // ESTADÍSTICAS
  // ============================
  function showStats() {
    document.getElementById('totalGames').textContent = stats.totalGames;
    document.getElementById('citizenWins').textContent = stats.citizenWins;
    document.getElementById('impostorWins').textContent = stats.impostorWins;
    
    const winRate = stats.totalGames > 0 
      ? Math.round((stats.citizenWins / stats.totalGames) * 100) 
      : 0;
    document.getElementById('winRate').textContent = winRate + '%';
    
    // Top palabras
    const topWordsEl = document.getElementById('topWords');
    topWordsEl.innerHTML = '';
    
    const sortedWords = Object.entries(stats.wordsPlayed)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    
    if (sortedWords.length === 0) {
      topWordsEl.innerHTML = '<p class="small">No hay datos todavía</p>';
    } else {
      sortedWords.forEach(([word, count], index) => {
        const p = document.createElement('p');
        p.style.fontSize = '1rem';
        p.style.marginBottom = '8px';
        p.innerHTML = `${index + 1}. <strong>${word}</strong> - ${count} ${count === 1 ? 'vez' : 'veces'}`;
        topWordsEl.appendChild(p);
      });
    }
    
    showScreen('screen-stats');
  }

  function resetStats() {
    if (confirm('¿Seguro que quieres resetear todas las estadísticas?')) {
      stats = {
        totalGames: 0,
        citizenWins: 0,
        impostorWins: 0,
        wordsPlayed: {}
      };
      saveStats();
      showStats();
      playSound('success');
    }
  }

  // ============================
  // PREFERENCIAS
  // ============================
  function toggleDarkMode() {
    gameState.darkMode = !gameState.darkMode;
    document.body.classList.toggle('dark-mode');
    savePreferences();
    playSound('click');
  }

  function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    savePreferences();
    updateSoundButton();
    playSound('click');
  }

  function updateSoundButton() {
    const btn = document.getElementById('soundBtn');
    if (btn) {
      btn.textContent = gameState.soundEnabled ? '🔊' : '🔇';
    }
  }

  // ============================
  // TUTORIAL
  // ============================
  let currentTutorialStep = 1;

  function showTutorial() {
    currentTutorialStep = 1;
    document.getElementById('tutorialOverlay').style.display = 'flex';
    updateTutorialStep();
    playSound('click');
  }

  function nextTutorialStep() {
    currentTutorialStep++;
    if (currentTutorialStep > 4) {
      closeTutorial();
      return;
    }
    updateTutorialStep();
    playSound('click');
  }

  function updateTutorialStep() {
    document.querySelectorAll('.tutorial-step').forEach(step => {
      step.classList.remove('active');
      if (parseInt(step.dataset.step) === currentTutorialStep) {
        step.classList.add('active');
      }
    });
  }

  function closeTutorial() {
    document.getElementById('tutorialOverlay').style.display = 'none';
    playSound('click');
  }

  // ============================
  // EVENT LISTENERS Y EXPOSICIÓN GLOBAL
  // ============================
  document.getElementById("selectPlayers").addEventListener("change", refreshPlayerNameInputs);

  window.startGame = startGame;
  window.nextPlayer = nextPlayer;
  window.startAnotherRound = startAnotherRound;
  window.backToStart = backToStart;
  window.goToSetup = goToSetup;
  window.selectMode = selectMode;
  window.startVoting = startVoting;
  window.revealVotes = revealVotes;
  window.showReveal = showReveal;
  window.pauseTimer = pauseTimer;
  window.resetTimer = resetTimer;
  window.addTime = addTime;
  window.showStats = showStats;
  window.resetStats = resetStats;
  window.toggleDarkMode = toggleDarkMode;
  window.toggleSound = toggleSound;
  window.showTutorial = showTutorial;
  window.nextTutorialStep = nextTutorialStep;
  window.closeTutorial = closeTutorial;
  window.toggleCardLift = toggleCardLift; // Exponer la función del botón

  // ============================
  // INICIAR APP
  // ============================
  initGame();
