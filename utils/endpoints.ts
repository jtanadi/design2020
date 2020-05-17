let domain: string;
if (process.env.LOCAL_API === "true") {
  domain = "http://localhost:3001";
  console.log(`Endpoint is ${domain}`);
} else {
  domain = "https://design2020-api.jtanadi.now.sh";
}

const api = domain + "/api";

export { domain, api };
