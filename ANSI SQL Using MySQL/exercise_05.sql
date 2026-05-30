SELECT
    u.city,
    COUNT(DISTINCT r.registration_id)
        AS registrations
FROM Users u
JOIN Registrations r
    ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY registrations DESC
LIMIT 5;