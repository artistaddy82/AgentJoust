/**
 * global.js — AgentJoust site-wide interactions
 */
;(function () {
  'use strict'

  // Geo auto-fill for lead forms (same pattern as MeetLifeAgents)
  window.geoAutoFill = function (stateEl, cityEl, badge) {
    fetch('https://ipwho.is/')
      .then(function (r) { return r.json() })
      .then(function (d) {
        var stateCode = (d.region_code || '').toLowerCase()
        var cityName  = (d.city || '').trim()
        if (!stateCode) return

        if (stateEl) stateEl.value = stateCode

        if (badge && cityName) {
          badge.innerHTML =
            '<span>📍</span>' +
            '<span>' + cityName + ', ' + stateCode.toUpperCase() + '</span>' +
            '<button onclick="this.parentElement.style.display=\'none\';document.getElementById(\'aj-state\')&&document.getElementById(\'aj-state\').focus()">Not you?</button>'
          badge.style.display = 'flex'
        }
      })
      .catch(function () {})
  }

})()
