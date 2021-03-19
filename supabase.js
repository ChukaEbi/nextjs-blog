import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mqkmlcsirahrjrxokmfl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTcyODE2MiwiZXhwIjoxOTMxMzA0MTYyfQ.cDCH6cBT4P8Iv-7i5ySXncLLt5SEs2e0wed6l0z1YdM"
);

export default supabase;