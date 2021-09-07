// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'




// theme.set()
// const lightTheme = {
//     "background": "#ffffff",
//     "textColor": "#333333",
//     "fontSize": 11,
//     "axis": {
//         "domain": {
//             "line": {
//                 "stroke": "#777777",
//                 "strokeWidth": 1
//             }
//         },
//         "ticks": {
//             "line": {
//                 "stroke": "#777777",
//                 "strokeWidth": 1
//             }
//         }
//     },
//     "grid": {
//         "line": {
//             "stroke": "#dddddd",
//             "strokeWidth": 1
//         }
//     }
// }
const darkTheme = {
    "background": "#091321",
    "textColor": "#C8D2E0",
    "fontSize": 13,
    "axis": {
        "domain": {
            "line": {
                "stroke": "#9BA5B3",
                "strokeWidth": 1
            }
        },
        "ticks": {
            "line": {
                "stroke": "#798391",
                "strokeWidth": 1
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#C8D2E0",
            "strokeWidth": 1
        }
    }
}






// interface AxisPropss  {
//     orient: string,
//     tickSize: number,
//     tickPadding: number,
//     tickRotation: number,
//     legend: string,
//     legendOffset: number,
//     legendPosition: string
// }


interface DataProps {
    theme: Map<string, string>,

    data: {
        id: string;
        color: string;
        data: {
            x: string,
            y: number
        }[];
      }[];
}


// interface AxisProps<Value extends AxisValue = any> {
//     ticksPosition?: 'before' | 'after';
//     tickValues?: TicksSpec<Value>;
//     tickSize?: number;
//     tickPadding?: number;
//     tickRotation?: number;
//     format?: string | ValueFormatter<Value>;
//     renderTick?: (props: AxisTickProps<Value>) => JSX.Element;
//     legend?: React.ReactNode;
//     legendPosition?: AxisLegendPosition;
//     legendOffset?: number;
//     ariaHidden?: boolean;

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveLine = ({ data, theme }: DataProps) => (
   
    // enableSlices = true;   // create a slice across x or y 

    <ResponsiveLine
        theme={darkTheme}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        curve='natural'
        lineWidth={2}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'y axis label',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft = {{
            // colors: theme.get('itemTextColor') as string,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'x axis lable',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                itemTextColor: theme.get('legendTextColor') as string,
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: theme.get('hoverBackground'),
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)