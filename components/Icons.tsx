import { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<SVGElement>;

export const Icons = {
  github: (props: IconProps) => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
        fill="currentColor"
        p-id="2047"
      ></path>
    </svg>
  ),
  juejin: (props: IconProps) => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M465.188571 161.792c-22.966857 18.139429-44.324571 35.108571-47.396571 37.741714l-5.851429 4.681143 10.971429 8.630857c5.997714 4.827429 11.849143 9.508571 13.019429 10.532572 1.170286 1.024 17.993143 14.336 37.156571 29.696l34.962286 27.794285 5.266285-3.949714c2.925714-2.194286 23.259429-18.432 45.348572-35.986286 21.942857-17.554286 41.252571-32.768 42.715428-33.645714 1.609143-1.024 2.779429-2.194286 2.779429-2.779428 0-0.438857-9.654857-8.630857-21.504-17.846858-11.995429-9.362286-22.674286-17.846857-23.844571-18.870857-15.945143-13.019429-49.737143-39.058286-50.761143-39.058285-0.585143 0.146286-19.894857 14.921143-42.861715 33.060571zM698.514286 342.162286c-191.049143 151.113143-189.586286 149.942857-193.097143 147.748571-3.072-1.901714-11.556571-8.484571-64.073143-50.029714-9.069714-7.168-18.578286-14.774857-21.357714-16.822857-2.779429-2.194286-8.777143-6.875429-13.312-10.532572-4.681143-3.657143-10.678857-8.338286-13.312-10.532571-13.165714-10.24-71.094857-56.027429-102.107429-80.457143-5.851429-4.681143-11.410286-8.484571-12.141714-8.484571-0.731429 0-10.971429 7.753143-22.674286 17.115428-11.702857 9.508571-22.674286 18.285714-24.283428 19.456-1.755429 1.170286-5.12 3.949714-7.460572 6.144-2.340571 2.340571-4.827429 4.096-5.412571 4.096-3.072 0-0.731429 3.072 6.436571 8.777143 4.096 3.218286 8.777143 6.875429 10.093714 8.045714 1.316571 1.024 10.24 8.045714 19.748572 15.506286s23.259429 18.285714 30.427428 23.990857c19.309714 15.213714 31.890286 25.307429 127.853715 101.083429 47.835429 37.741714 88.795429 69.778286 90.843428 71.094857 3.657143 2.486857 3.949714 2.486857 7.460572-0.292572 1.901714-1.462857 9.216-7.168 16.091428-12.726857 6.875429-5.412571 14.774857-11.702857 17.554286-13.897143 30.134857-23.698286 80.018286-63.049143 81.773714-64.512 1.170286-1.024 12.434286-9.801143 24.868572-19.602285s37.888-29.696 56.32-44.324572c18.578286-14.628571 46.226286-36.425143 61.732571-48.566857 15.506286-12.141714 27.794286-22.528 27.501714-23.259428-0.877714-1.170286-57.636571-47.104-59.977142-48.274286-0.731429-0.438857-18.578286 12.726857-39.497143 29.257143z"
        fill="#006CFF"
        p-id="3069"
      ></path>
      <path
        d="M57.929143 489.325714c-15.213714 12.288-28.525714 23.405714-29.696 24.576-2.340571 2.194286-5.412571-0.438857 80.018286 66.852572 33.206857 26.185143 32.621714 25.746286 57.636571 45.494857 10.386286 8.192 36.278857 28.672 57.782857 45.494857 38.180571 30.134857 44.909714 35.401143 52.662857 41.545143 2.048 1.755429 22.966857 18.139429 46.372572 36.571428 23.259429 18.432 74.166857 58.514286 112.932571 89.088 38.912 30.573714 71.094857 55.734857 71.826286 56.027429 0.731429 0.292571 7.460571-4.388571 14.921143-10.386286 21.796571-16.969143 90.258286-70.948571 101.522285-79.872 5.705143-4.534857 12.873143-10.24 15.945143-12.580571 3.072-2.486857 6.436571-5.12 7.314286-5.851429 0.877714-0.877714 11.849143-9.508571 24.283429-19.309714 20.772571-16.091429 59.099429-46.226286 64.365714-50.614857 1.170286-1.024 5.12-4.096 8.777143-6.875429 3.657143-2.779429 7.899429-6.290286 9.508571-7.606857 1.609143-1.316571 14.774857-11.702857 29.257143-23.113143 29.110857-22.820571 42.276571-33.206857 88.502857-69.632 17.261714-13.604571 32.475429-25.453714 33.645714-26.477714 2.486857-2.048 31.451429-24.868571 44.617143-35.254857 4.827429-3.657143 9.069714-7.168 9.508572-7.606857 0.438857-0.585143 5.997714-4.827429 12.434285-9.801143 6.436571-4.827429 13.165714-10.24 15.067429-11.849143l3.364571-2.925714-9.947428-7.753143c-5.412571-4.388571-10.24-8.192-10.678857-8.630857-1.170286-1.316571-22.381714-18.432-30.134857-24.283429-3.949714-3.072-7.314286-5.997714-7.606858-6.729143-1.316571-3.072-6.729143 0.146286-29.257142 17.993143-13.458286 10.532571-25.746286 20.187429-27.355429 21.504-1.609143 1.462857-10.532571 8.338286-19.748571 15.652572-9.216 7.168-17.115429 13.458286-17.554286 13.897142-0.438857 0.438857-6.582857 5.412571-13.897143 10.971429-7.168 5.558857-15.213714 11.702857-17.700571 13.750857-4.973714 4.096-5.412571 4.388571-20.333715 16.237714-5.558857 4.388571-11.264 8.777143-12.434285 9.801143-1.170286 1.024-20.333714 16.091429-42.422858 33.353143-22.089143 17.408-41.545143 32.768-43.154285 34.084572-1.609143 1.462857-14.482286 11.556571-28.525715 22.528s-40.813714 32.036571-59.538285 46.811428c-18.578286 14.774857-42.276571 33.353143-52.516572 41.398857s-23.259429 18.285714-28.964571 22.820572l-10.386286 8.338285-4.388571-3.072c-2.340571-1.755429-4.681143-3.510857-5.12-3.949714-0.438857-0.438857-4.973714-4.096-10.24-8.045714-11.849143-9.216-14.482286-11.264-16.676572-13.165714-0.877714-0.877714-4.242286-3.510857-7.460571-5.851429-3.218286-2.486857-6.144-4.681143-6.582857-5.12-0.438857-0.438857-6.875429-5.705143-14.482286-11.702857-7.606857-5.851429-14.921143-11.556571-16.091429-12.580572-1.316571-1.170286-17.115429-13.604571-35.254857-27.794285-17.993143-14.189714-35.108571-27.648-38.034285-29.842286-5.705143-4.681143-33.499429-26.624-125.074286-98.742857-34.523429-27.209143-72.704-57.344-84.845714-66.852572-49.737143-39.497143-55.149714-43.593143-56.905143-43.446857-0.877714 0-14.043429 10.24-29.257143 22.528z"
        fill="#006CFF"
        p-id="3070"
      ></path>
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        d="M800 192L160 424.672 567.328 832 800 192z m-107.008 107.008l-151.488 416.672-107.008-106.976 161.888-213.088-213.088 161.888-106.976-107.008 416.672-151.488z"
        fill-opacity=".87"
        p-id="4045"
      ></path>
    </svg>
  ),
};
