async function handler(req) {
    const headersOBJ = new Headers();
    headersOBJ.set("Access-Control-Allow-Origin", "*");
    headersOBJ.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PATCH, DELETE");
    headersOBJ.set("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        return new Response(null, {headers: headersOBJ});
    }

    let url = new URL(req.url);
    let dbPath = "../db/teams.json";

    if (req.method === "GET") {
        if (url.pathname === "/teams") {
            return new Response(Deno.readTextFileSync(dbPath), {headers: headersOBJ});
        }
    }

    if (req.method === "POST") {
        if (url.pathname === "/teams") {
            if (req.headers.get("content-type") !== "application/json") {
                return new Response(null, {status: 406, headers: headersOBJ});
            }

            let reqBody = await req.json();
            if (!reqBody.name || !reqBody.stage || !reqBody.player1 || !reqBody.player2 || !reqBody.player3 || !reqBody.player4 || !reqBody.player5) {
                return new Response(JSON.stringify("One or more attributes missing, try again"), {status: 400, headers: headersOBJ});
            }

            let db = JSON.parse(Deno.readTextFileSync(dbPath));
            db.push(reqBody);
            Deno.writeTextFileSync(dbPath, JSON.stringify(db));

            return new Response(JSON.stringify("Team added successfully"), {status: 201, headers: headersOBJ});
        }
    }
}

Deno.serve(handler);