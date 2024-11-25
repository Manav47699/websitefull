/* Apply the glow animation only to the border */
main #aboutboxglow{
    animation: glow-footer 2s infinite alternate;
  }
  
  /* Animation keyframe for glowing border effect */
  @keyframes glow-footer {
    0% {
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7);
    }
    100% {
      box-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 255, 1);
    }
  }
  