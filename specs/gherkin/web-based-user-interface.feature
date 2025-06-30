Feature: Web-Based User Interface
  The system provides a web-based interface for elderly users and caregivers to monitor vital signs, receive alerts, and use voice interaction features.

  Background:
    Given the user is on a supported desktop or tablet device
    And the user has accessed the web-based user interface

  # Accessibility and Usability
  Scenario: Interface is accessible and easy to use for elderly users and caregivers
    Given the user has normal or impaired vision and dexterity
    When the user navigates the interface
    Then the interface provides high contrast, large fonts, and clear navigation
    And all interactive elements are accessible via keyboard and screen reader

  # Core Features Available
  Scenario: All core features are available via the web UI
    Given the user is authenticated or identified (if required)
    When the user accesses the dashboard
    Then the user can view real-time vital signs
    And the user can receive alerts for abnormal vitals
    And the user can use speech-to-text and text-to-speech features

  # Responsive Design
  Scenario Outline: UI is responsive on desktop and tablet devices
    Given the user is using a <device>
    When the user resizes the browser window
    Then the layout and controls adapt for optimal usability
    Examples:
      | device   |
      | desktop  |
      | tablet   |

  # Accessibility Standards
  Scenario: UI meets accessibility standards
    Given the user is using assistive technology
    When the user interacts with the interface
    Then all elements have appropriate ARIA roles and labels
    And the interface passes accessibility checks (contrast, font size)

  # Privacy and Data Protection
  Scenario: UI complies with privacy and data protection regulations
    Given the user is interacting with personal health data
    Then the interface does not expose sensitive information to unauthorized users
    And all data transmissions are encrypted

  # No Mobile App
  Scenario: No mobile app is available in the initial version
    Given the user is on a mobile phone
    When the user tries to access the system
    Then the user is informed that only desktop and tablet devices are supported

  # Integration Points
  Scenario: UI integrates with real-time vital signs monitoring, alerting, and voice features
    Given the user is on the dashboard
    When new vital sign data is received
    Then the data is displayed in real time
    And alerts are shown for abnormal values
    And the user can activate speech-to-text and text-to-speech controls
