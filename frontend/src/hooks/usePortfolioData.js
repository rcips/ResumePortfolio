import { useEffect, useState } from "react";
import { getJSON } from "../api";
import * as fallback from "../data/fallback";

export default function usePortfolioData() {
  const [data, setData] = useState({
    profile: fallback.profile,
    experience: fallback.experience,
    skills: fallback.skills,
    education: fallback.education,
    projects: fallback.projects,
  });
  const [source, setSource] = useState("local");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [profile, experience, skills, education, projects] = await Promise.all([
        getJSON("/profile", fallback.profile),
        getJSON("/experience", fallback.experience),
        getJSON("/skills", fallback.skills),
        getJSON("/education", fallback.education),
        getJSON("/projects", fallback.projects),
      ]);
      if (!cancelled) {
        setData({ profile, experience, skills, education, projects });
        setSource("api");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { ...data, source };
}
