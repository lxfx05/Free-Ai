
offline-dev-chatbot/
├── README.md
├── LICENSE
├── .gitignore
├── requirements.txt
├── Dockerfile
├── setup.sh
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── local_llm.py
│   ├── prompts/
│   │   ├── system_prompt.txt
│   │   └── templates/
│   │       ├── clarify_prompt.txt
│   │       ├── generator_prompt.txt
│   │       └── code_explainer_prompt.txt
│   │
│   ├── code_check/
│   │   ├── __init__.py
│   │   ├── python_checker.py
│   │   ├── java_checker.py
│   │   ├── cpp_checker.py
│   │   ├── js_checker.py
│   │   ├── go_checker.py
│   │   └── sql_checker.py
│   │
│   ├── models/
│   │   ├── README.txt              # Istruzioni su dove mettere i pesi
│   │   ├── model.gguf              # modello Llama/phi localizzato
│   │   └── tokenizer.model         # se richiesto dal framework
│   │
│   ├── utils/
│   │   ├── sandbox_runner.py       # opzionale: esecuzione sicura del codice
│   │   ├── diff_utils.py           # genera patch suggerite
│   │   ├── file_ops.py             # lettura/scrittura temporanea file
│   │   └── logging_utils.py        # logger personalizzato
│   │
│   └── tests/
│       ├── test_api.py
│       ├── test_checkers.py
│       └── test_llm.py
│
├── frontend/
│   ├── index.html                  # interfaccia chat-style
│   ├── main.js                     # gestione input e chiamate fetch
│   ├── style.css                   # Tailwind build o custom CSS
│   ├── assets/
│   │   ├── logo.svg
│   │   └── icons/
│   │       ├── send.svg
│   │       └── code.svg
│   └── components/
│       ├── chat_ui.html            # layout chat
│       ├── code_result.html        # visualizzatore risultati checker
│       └── project_viewer.html     # visualizzazione file generati
│
├── data/
│   ├── history.db                  # SQLite per cronologia chat/code
│   ├── logs/
│   │   ├── app.log
│   │   └── error.log
│   └── cache/
│       └── temp_code/              # file temporanei generati dai checkers
│
├── scripts/
│   ├── download_model.sh           # scarica e posiziona pesi LLM
│   ├── build_frontend.sh           # genera CSS Tailwind
│   ├── run_server.sh               # avvia backend + frontend
│   └── sandbox_test.sh             # test di sicurezza codice
│
└── docs/
    ├── SYSTEM_OVERVIEW.md          # versione lunga della descrizione
    ├── API_REFERENCE.md            # dettagli endpoint /mode1, /mode2
    ├── LOCAL_SETUP.md              # istruzioni installazione offline
    ├── SECURITY_NOTES.md
    └── MODEL_GUIDE.md              # guida ai modelli compatibili
