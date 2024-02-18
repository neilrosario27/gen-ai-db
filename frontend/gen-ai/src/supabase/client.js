import { createClient } from "@supabase/supabase-js";

const projectURL = "https://legcqslsudvwqenlmkgm.supabase.co";
const projectKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZ2Nxc2xzdWR2d3Flbmxta2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNjc3NDQsImV4cCI6MjAyMzc0Mzc0NH0.MzYADmSxRMUfSJeTqDYbk8Kq796vM2tWgj6owhNCdbw";

export const supabase = createClient(projectURL, projectKey);
