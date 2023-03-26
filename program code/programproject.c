#include <stdio.h>
#include <stdlib.h>
int s[1000];
int top=-1;
void push(int x)
{
top=top+1;
s[top]=x;
}
int pop()
{
return (s[top--]);
}
void dijikstra(int v,int cost[1000][1000])
{ 
int s,i,u,count,w,vis[20],dist[100];
printf("Enter your current location from the above options\n");
scanf("%d",&s);
if(s<=15)
{
for(i=1;i<=v;i++)
{
vis[i]=0;
dist[i]=cost[s][i];
}
vis[s]=1;
dist[s]=0;
count=2;
while(count<v)
{
for(i=1;i<=v;i++)
{
if(vis[i]==0)
u=i;
}
vis[u]=1;
count++;
for(w=1;w<=v;w++)
{
if(vis[w]==0)
{
if(dist[u]+cost[u][w]<dist[w])
dist[w]=dist[w]+cost[u][w];
}
}
}
printf("--------------------------------------------------------------------------------------\n");
printf("The Minimum cost of travelling to any of the given places from your selected location is:\n");
printf("--------------------------------------------------------------------------------------\n");
for(i=1;i<=v;i++)
{
if(i!=s)
{ if(v==15)
printf("From Location %d to Location %d,the cost will be=%d Pounds\n",s,i,dist[i]);    
else if(v==12)
printf("From Location %d to Location %d,the cost will be=%d Rupees\n",s,i,dist[i]);
else
printf("From Location %d to Location %d,the cost will be=%d Dollars\n",s,i,dist[i]);
}
}
printf("--------------------------------------------------------------------------------------\n");
}
else
{
printf("--------------------------------------------------------------------------------------\n");
printf("Invalid Location,Please Try Again\n");
printf("--------------------------------------------------------------------------------------\n");
dijikstra(v,cost);
}
}
void plondon()
{
printf("Here is the Detailed map of the shortest Routes that you need to take:\n");
printf("--------------------------------------------------------------------------------------\n");
printf("Heathrow International Airport--17--Windsor Castle--2--");
printf("Piccadilly Circus And Trafalgar Square--2--London Eye--2--Big Ben\n");
printf("Heathrow International Airport--39--Warner Bros. Studio Tour London\n");
printf("Piccadilly Circus And Trafalgar Square--2--Buckingham Palace--5--Madame Tussauds London--3--ZSL London Zoo\n");
printf("Piccadilly Circus And Trafalgar Square--2--The British Museum\n");
printf("London Eye--3--Shakespeare’s Globe Theatre\n");
printf("London Eye--3--St Paul’s Cathedral--3--Tower Of London--9--Emirates Air line cable car\n");
printf("Windsor Castle--12--Kew Gardens\n");
printf("--------------------------------------------------------------------------------------\n");
}
void pbangalore()
{
printf("Here is the Detailed map of the shortest Routes that you need to take:\n");
printf("--------------------------------------------------------------------------------------\n");
printf("Kempegowda International Airport--561--Nandi Hills\n");
printf("Kempegowda International Airport--473--Bangalore Palace--44--");
printf("Jawaharlal Nehru Planetarium and Indira Gandhi Musical fountain park--30--Vidhana Soudha--30--Vishvesvaraya Industrial and Technological Museum\n");
printf("Vidhana Soudha--110--Iskcon Temple\n");
printf("Vidhana Soudha--30--Cubbon Park--36--Lalbagh Botanical Garden--284--Bannerghatta Zoo\n");
printf("Cubbon Park--38--Commercial Street and Brigade road\n");
printf("Lalbagh Botanical Garden--477--Wonderla Amusement Park\n");
printf("--------------------------------------------------------------------------------------\n");
}
void pNYC()
{
printf("Here is the Detailed map of the shortest Routes that you need to take:\n");
printf("--------------------------------------------------------------------------------------\n");
printf("John F. Kennedy International Airport--32--United Nations Headquaters--2--");  
printf("Rockefeller Center & Top of the Rock Observation Deck--2--Grand Central Terminal\n");
printf("Rockefeller Center & Top of the Rock Observation Deck--2--Empire State Building\n");
printf("Rockefeller Center & Top of the Rock Observation Deck--2--Central Park and American Museum of Natural History and Metropolitan Museum of Art\n");
printf("Central Park and American Museum of Natural History and Metropolitan Museum of Art--3--Intrepid Sea, Air and Space Museum\n");
printf("Central Park and American Museum of Natural History and Metropolitan Museum of Art--2--Broadway and the Theater District\n");
printf("Central Park and American Museum of Natural History and Metropolitan Museum of Art--2--Times Square--2--");
printf("High Line--5--One World Observatory--2--Statue of Liberty--3--Brooklyn Bridge\n");
printf("--------------------------------------------------------------------------------------\n");
}
void prims(int ver,int cost[1000][1000])
{
int i,j,a,b,v,u,ne=1,vis[20];
int min,mincost=0;
for(i=2;i<=ver;i++)
vis[i]=0;    
printf("The Optimized Routes that you will have to take are as follows:\n");
vis[1]=1;
while(ne<ver)
{
for(i=1,min=999;i<=ver;i++)
{
for(j=1;j<=ver;j++)
{ 
if(cost[i][j]==0)
cost[i][j]=999;
if(cost[i][j]<min)
{
if(vis[i]==1)
{
min=cost[i][j];
a=u=i;
b=v=j;
}
}
}
}
if(vis[u]==0 || vis[v]==0)
{
printf("Route %d: Location %d to Location %d,the cost will be=%d\n",ne++,a,b,min);
mincost+=min;
vis[b]=1;
}
cost[a][b]=cost[b][a]=999;
}
printf("--------------------------------------------------------------------------------------\n");
printf("Therefore,the minimum cost of travelling the whole city will be:\n");
if(ver==15)
{
printf("%d Pounds\n",mincost);
printf("--------------------------------------------------------------------------------------\n");
plondon();
}
else if(ver==12)
{
printf("%d Rupees\n",mincost);
printf("--------------------------------------------------------------------------------------\n");
pbangalore();
}
else
{
printf("%d Dollars\n",mincost);
printf("--------------------------------------------------------------------------------------\n");
pNYC();
}
}
void london()
{ 
int i,j,l;
int cost[1000][1000];
int array[105]={33,39,33,34,19,123,32,32,31,36,39,39,17,37,65,8,10,20,14,2,2,3,5,3,5,49,3,40,39,55,94,43,45,43,42,51,97,46,47,3,17,19,6,7,5,5,7,10,45,9,
20,19,6,7,7,5,8,11,9,10,62,16,16,15,20,23,23,12,22,17,16,17,14,11,9,16,14,2,2,2,4,6,2,5,2,3,4,5,2,4,3,5,7,2,5,3,5,4,5,3,49,3,50,3,51};
for(i=104;i>=0;i--)
{
push(array[i]);    
}
printf("Here are the places,you can visit in london\n");
printf("--------------------------------------------------------------------------------------\n");
printf("1.Heathrow International Airport\n");
printf("2.London Eye – Iconic Ferris Wheel\n");
printf("3.Warner Bros. Studio Tour London – The Making Of Harry Potter\n");
printf("4.Madame Tussauds London – Lifelike Wax Statues\n");
printf("5.ZSL London Zoo- World’s Oldest Zoo\n");
printf("6.Kew Gardens – Royal Botanic Gardens\n");
printf("7.Emirates Air line cable car - Royal Docks\n");
printf("8.Piccadilly Circus And Trafalgar Square – Must Visit Places\n");
printf("9.Big Ben – A Legendary Monument\n");
printf("10.Buckingham Palace – Changing Of The Guard\n");
printf("11.The British Museum – For A Variety Of Artifacts\n");
printf("12.St Paul’s Cathedral – Most Famous Church\n");
printf("13.Tower Of London – A World Heritage Site\n");
printf("14.Windsor Castle\n");
printf("15.Shakespeare’s Globe Theatre- Experience a classic work of William Shakespeare\n");
printf("--------------------------------------------------------------------------------------\n");
printf("Do you want to travel to all of the above places at minimal cost\n");
printf("Yes-1\n");
printf("No-2\n");
printf("--------------------------------------------------------------------------------------\n");
scanf("%d",&l);
for(i=1;i<=15;i++)
{
for(j=1;j<=15;j++)
{
if(i==j)
{
cost[i][j]=0;
}
else if(i>j) 
{
cost[i][j]=cost[j][i];
}
else
{
cost[i][j]=pop();    
}
}
}
switch(l)
{
case 1: prims(15,cost); break;
case 2: dijikstra(15,cost); break;
default: printf("\nInvalid Choice,Please Try again\n");
printf("--------------------------------------------------------------------------------------\n");
exit(0);
}
}
void bangalore()
{
int i,j,b;
int cost[1000][1000];
int array[66]={492,561,548,485,473,516,474,822,497,515,984,945,62,110,50,48,30,336,30,30,498,954,893,929,924,882,1229,905,918,1391,156,105,83,78,284,36,54,477,119,173,131,447,125,153,524,63,44,399,74,81,561,45,359,38,53,536,354,30,42,522,336,356,576,30,497,527};
for(i=65;i>=0;i--)
{
push(array[i]);    
}
printf("Here are the places,you can visit in Bangalore\n");
printf("--------------------------------------------------------------------------------------\n");
printf("1.Kempegowda International Airport\n");
printf("2.Vidhana Soudha\n");
printf("3.Nandi Hills\n");
printf("4.Lalbagh Botanical Garden\n");
printf("5.Iskcon Temple\n");
printf("6.Bangalore Palace\n");
printf("7.Commercial Street and Brigade road\n");
printf("8.Jawaharlal Nehru Planetarium and Indira Gandhi Musical fountain park\n");
printf("9.Bannerghatta zoo\n");
printf("10.Cubbon Park\n");
printf("11.Vishvesvaraya Industrial and Technological Museum\n");
printf("12.Wonderla Amusement Park\n");
printf("--------------------------------------------------------------------------------------\n");
printf("Do you want to travel to all of the above places at minimal cost\n");
printf("Yes-1\n");
printf("No-2\n");
printf("--------------------------------------------------------------------------------------\n");
scanf("%d",&b);
for(i=1;i<=12;i++)
{
for(j=1;j<=12;j++)
{
if(i==j)
{
cost[i][j]=0;
}
else if(i>j) 
{
cost[i][j]=cost[j][i];
}
else
{
cost[i][j]=pop();    
}
}
}
switch(b)
{
case 1: prims(12,cost); break;
case 2: dijikstra(12,cost); break;
default: printf("\nInvalid Choice,Please Try again\n");
printf("--------------------------------------------------------------------------------------\n");
exit(0);
}
}
void NYC()
{
int i,j,ny;
int  cost[1000][1000];
int  array[78]={52,36,34,36,32,32,36,32,32,40,44,52,20,13,13,11,11,6,13,12,3,11,2,2,2,3,3,4,2,3,16,3,12,2,2,2,4,2,2,
11,4,14,3,3,3,2,3,14,3,10,3,5,2,2,10,6,13,4,2,2,9,6,12,2,4,8,4,5,2,11,3,10,11,5,14,12,6,9};
for(i=77;i>=0;i--)
{
push(array[i]);    
}
printf("Here are the places,you can visit in New York City\n");
printf("--------------------------------------------------------------------------------------\n");
printf("1.John F. Kennedy International Airport\n");
printf("2.Statue of Liberty- Giant Statue on Liberty Island\n");
printf("3.Central Park and American Museum of Natural History and Metropolitan Museum of Art\n");
printf("4.Rockefeller Center & Top of the Rock Observation Deck\n");
printf("5.Broadway and the Theater District\n");
printf("6.United Nations Headquaters\n");
printf("7.Empire State Building\n");
printf("8.High Line\n");
printf("9.The Historic Times Square\n");
printf("10.Grand Central Terminal- The largest train station in the world\n");
printf("11.Brooklyn Bridge- New York's First Supension Bridge\n");
printf("12.Intrepid Sea, Air and Space Museum\n");
printf("13.One World Observatory\n");
printf("--------------------------------------------------------------------------------------\n");
printf("Do you want to travel to all of the above places at minimal cost\n");
printf("Yes-1\n");
printf("No-2\n");
printf("--------------------------------------------------------------------------------------\n");
scanf("%d",&ny);
for(i=1;i<=13;i++)
{
for(j=1;j<=13;j++)
{
if(i==j)
{
cost[i][j]=0;
}
else if(i>j) 
{
cost[i][j]=cost[j][i];
}
else
{
cost[i][j]=pop();    
}
}
}
switch(ny)
{
case 1: prims(13,cost); break;
case 2: dijikstra(13,cost); break;
default: printf("\nInvalid Choice,Please Try again\n");
printf("--------------------------------------------------------------------------------------\n");
exit(0);
}
}
int main()
{ 
int n;
while(1)
{
printf("--------------------------------------------------------------------------------------\n");
printf("Enter the city you would like to visit\n");
printf("London (England)- press-1\n");
printf("Bangalore (India)- press-2\n");
printf("New York City (United States of America)- press-3\n");
printf("Press any other key to exit\n");
printf("--------------------------------------------------------------------------------------\n");
scanf("%d",&n);
switch(n)
{
case 1: london();
break;
case 2: bangalore();
break;
case 3: NYC();
break;
default:printf("\nThank you,We hope to serve you again soon\n");
printf("--------------------------------------------------------------------------------------\n");
exit(0);
}
}
return 0;
}
