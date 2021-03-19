import { useEffect, useState } from "react"

export default function FeatureGate( {featureId, userId, children }) {

  const [isLoading, setIsLoading] = useState(true)
  const [showFeature, setShowFeature] = useState(false)

  function giveAccess() {
    fetch(`/api/feature_access/${featureId}`, { method: "POST", body: JSON.stringify({ app_id: 2, user_id: userId}) })
      .then((res) => res.json())
      .then((data) => {
        if (data.user.external_id == userId) setShowFeature(data.give_user_access);
      });
  }
  useEffect(() => {
    fetch(`/api/feature_access/${featureId}?app_id=${2}&user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setShowFeature(data.give_user_access)
      });
  }, []);

  if (showFeature) {
    return (
      <div>
        {children}
      </div>
    )
  }
  return (
    <>
    <p>
      User does not have access to feature
    </p>
    <button onClick={() =>  giveAccess() }>Give access</button>
    </>
  )
};