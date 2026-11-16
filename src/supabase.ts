import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://prtbdlwvmlkscahcrrzu.supabase.co";
const supabaseKey = "sb_publishable_9Pmy95uIwxm1Nhxhe9KmqQ_44pKPG8j";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);